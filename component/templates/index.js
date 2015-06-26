/*
<%= header %>
*/
/* global __WEBPACK__ */
import React from 'react';
import Template from './template.jsx';

// only load style when using webpack
/* istanbul ignore if  */
if (__WEBPACK__) {
    require('./style.less');
}

const <%= _.camelCase(name) %>Component = React.createClass({
    render: Template,
});

export default <%= _.camelCase(name) %>Component;
