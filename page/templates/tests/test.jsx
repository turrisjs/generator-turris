/*
<%= header %>
*/
/* global describe, it */
// import helpers
import test from 'tape';
import React from 'React/addons';
const {TestUtils} = React.addons;

// import page
import Page from '../src/pages/<%= _.camelCase(name) %>/page.js';

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
