// react
import React from 'react';
import {Route} from 'react-router';
import OtherPage from './page';

const route = React.createElement(Route, {name: 'other', key: 'route_other', handler: OtherPage});

export default route;
