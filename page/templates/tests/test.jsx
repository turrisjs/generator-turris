/*
<%= header %>
*/
/* global describe, it */
// import helpers
import test from 'tape';
import React from 'React/addons';
const {TestUtils} = React.addons;

// import page
import {<%= _.capitalize(_.camelCase(name)) %>Page as Page} from '../src/pages/<%= _.camelCase(name) %>/index.js';

test('<%= _.capitalize(name) %> page suite', function(it) {
    it.test('# should render', function(t) {
        // render
        const comp = TestUtils.renderIntoDocument(<Page />);

        // check if link and name are correct
        const divs = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'h1');
        t.equal(1, divs.length);
        t.end();
    });
});
