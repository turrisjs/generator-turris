/**
 * <%= header %>
 */
import React from 'react';

const render = function() {
    return (
        <h1>I am new <%= _.camelCase(name) %> page</h1>
    );
};

export default render;
