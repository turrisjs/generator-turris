/* istanbul ignore if  */
if (__WEBPACK__) {
    require('bootstrap/dist/css/bootstrap.css');
    require('../style/main.<%= style %>');
}
import App from './app.jsx';

App.start();
