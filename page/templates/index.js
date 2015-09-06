/*
<%= header %>
*/
import React from 'react';
import {Route} from 'react-router';
import <%= _.capitalize(_.camelCase(name)) %>Page from './page.js';

const route = React.createElement(Route, {name: '<%= _.camelCase(name) %>', key: 'route_<%= _.camelCase(name) %>', handler: <%= _.capitalize(_.camelCase(name)) %>Page});

export default route;
