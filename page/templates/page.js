/*
<%= header %>
*/
import React from 'react';
import Template from './template.jsx';

const <%= _.capitalize(_.camelCase(name)) %>Page = React.createClass({
    render: Template,
});

export default <%= _.capitalize(_.camelCase(name)) %>Page;
