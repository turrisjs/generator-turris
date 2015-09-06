import React from 'react';
import {DefaultRoute} from 'react-router';
import IndexPage from './page';

const IndexRoute = React.createElement(DefaultRoute, {name: 'home', key: 'route_default', handler: IndexPage});

export default IndexRoute;
