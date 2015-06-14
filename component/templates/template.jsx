/*
<%= header %>
*/
import React from 'react';

const render = function() {
    return (
        <div className="row">
            I am new <%= _.camelCase(name) %> component
        </div>
    );
};

export default render;
