// imports
import React from 'react';
import {NotFoundRoute} from 'react-router';
import NotFoundPage from './page';

const route = React.createElement(NotFoundRoute, {name: 'notfound', key: 'route_notfound', handler: NotFoundPage});

export default route;
