// react
import React from 'react';
import Navigation from '../navigation';

const render = function() {
    return (
        <div>
            <Navigation />

            <div className="container">
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        </div>
    );
};

export default render;
