// react
import React from 'react';
import {DefaultRoute} from 'react-router';
import Template from './template.jsx';

const IndexPage = React.createClass({
    getInitialState() {
        // init state
        return {
            // your stuff here
        };
    },
    render: Template,
});

const IndexRoute = React.createElement(DefaultRoute, {key: 'route_default', handler: IndexPage});

export default IndexRoute;
