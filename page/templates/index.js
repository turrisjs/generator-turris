/*
<%= header %>
*/
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const <%= _.capitalize(_.camelCase(name)) %>Page = React.createClass({
    render: Template,
});

const route = React.createElement(Route, {name: '<%= _.camelCase(name) %>', key: 'route_<%= _.camelCase(name) %>', handler: <%= _.capitalize(_.camelCase(name)) %>Page});

export default route;
export {<%= _.capitalize(_.camelCase(name)) %>Page};
