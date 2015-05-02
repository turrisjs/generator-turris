// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const page = React.createClass({
    render: Template,
});

const route = React.createElement(Route, {name: '<%= _.camelCase(name) %>', key: 'route_<%= _.camelCase(name) %>', handler: page});

export default route;
