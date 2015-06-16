// imports
import React from 'react';
import {NotFoundRoute} from 'react-router';
import Template from './template.jsx';

const page = React.createClass({
    render: Template,
});

const route = React.createElement(NotFoundRoute, {name: 'notfound', key: 'route_notfound', handler: page});

export default route;
