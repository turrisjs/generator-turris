// react
import React from 'react';
import ReactRouter from 'react-router';

const render = function() {
    return (
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Menu</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <ReactRouter.Link to="/" className="navbar-brand"><%= name %></ReactRouter.Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><ReactRouter.Link to="/">Home</ReactRouter.Link></li>
                        <li><ReactRouter.Link to="/other">Other</ReactRouter.Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default render;
