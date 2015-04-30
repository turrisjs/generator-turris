/* global describe, it */
// import helpers
import should from 'turris-test-helpers';

// import app
import App from '../src/app.jsx';

describe('App suite', function() {
    it('Should render', function() {
        // const React = this.React;
        // const TestUtils = this.TestUtils;

        // render
        App.start();
        // verify it exists
        should(document.getElementById('mainContainer').children.length).equal(1);
    });
});
