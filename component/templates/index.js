<%= header %>

import React from 'react';
import Template from './template.jsx';

const <%= _.camelCase(name) %>Component = React.createClass({
    render: Template,
});

export default <%= _.camelCase(name) %>Component;
