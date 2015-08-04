var rxNode = {
  type: 'Property',
  key: {
    type: 'Identifier',
    name: 'rx'
  },
  computed: false,
  value: {
    type: 'Literal',
    value: 'rx/dist/rx.lite.js'
  },
  kind: 'init',
  method: false,
  shorthand: false,
};

var aliasNode = {
  type: 'Property',
  key: {
    type: 'Identifier',
    name: 'alias'
  },
  computed: false,
  value: {
    type: 'ObjectExpression',
    properties: [rxNode]
  },
  kind: 'init',
  method: false,
  shorthand: false,
};

module.exports = function(data) {
  var exists = false;
  var added = false;

  data.body.forEach(function(it) {
    if (it.type === 'ExpressionStatement') {
      var props = it.expression.right.properties;
      props.forEach(function(prop) {
        if (prop.key.name === 'resolve' && prop.value.properties) {
          prop.value.properties.forEach(function(resolve) {
            if (resolve.key.name === 'alias' && resolve.value.properties) {
              resolve.value.properties.forEach(function(res) {
                if (res.key.name === 'rx') {
                  exists = true;
                }
              });

              if (!exists) {
                if (resolve.value.properties) {
                  resolve.value.properties.push(rxNode);
                } else {
                  resolve.value.properties = [rxNode];
                }
                added = true;
              }
            }
          });

          if (!exists && !added) {
            prop.value.properties.push(aliasNode);
            added = true;
          }
        }
      });
    }
  });

  return data;
};
