/*
<%= header %>
*/
/* global describe, it */
// import helpers
import should from 'turris-test-helpers';

// import page
import {<%= _.capitalize(_.camelCase(name)) %>Page as Page} from '../src/pages/<%= _.camelCase(name) %>/index.js';

describe('<%= _.capitalize(name) %> page suite', function() {
    it('Should render', function() {
        const React = this.React;
        const TestUtils = this.TestUtils;

        // render
        const comp = TestUtils.renderIntoDocument(
            <Page />,
            this.container
        );

        // check if link and name are correct
        const divs = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'h1');
        should(divs.length).equal(1);
    });
});
