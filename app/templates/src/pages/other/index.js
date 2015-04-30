// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const page = React.createClass({
    render: Template,
});

const route = React.createElement(Route, {name: 'other', key: 'route_other', handler: page});

export default route;
