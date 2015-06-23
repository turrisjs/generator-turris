// react
import React from 'react';
import {Route} from 'react-router';
import Template from './template.jsx';

const OtherPage = React.createClass({
    render: Template,
});

const route = React.createElement(Route, {name: 'other', key: 'route_other', handler: OtherPage});

export default route;
