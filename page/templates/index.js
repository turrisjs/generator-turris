/*
<%= header %>
*/
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const Page = React.createClass({
    render: Template,
});

const route = React.createElement(Route, {name: '<%= _.camelCase(name) %>', key: 'route_<%= _.camelCase(name) %>', handler: Page});

export default route;
export {Page};
