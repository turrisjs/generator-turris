/*
<%= header %>
*/
/* global describe, it */
// import helpers
import test from 'tape';
import React from 'React/addons';
const {TestUtils} = React.addons;

// import page
import Component from '../src/components/<%= _.camelCase(name) %>/index.js';

test('<%= _.capitalize(name) %> component suite', function(it) {
    it.test('# should render', function(t) {
        // render
        const comp = TestUtils.renderIntoDocument(<Component />);

        // check if link and name are correct
        const divs = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'div');
        t.equal(1, divs.length);
        t.end();
    });
});
