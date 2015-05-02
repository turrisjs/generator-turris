# generator-turris

> [Yeoman](http://yeoman.io) generator for ES6 React web applications

## About Turris.js

Turris.js is a combination of existing libraries and tools that allows fast and simple creation of single page web applications using [ES6](http://www.ecma-international.org/publications/standards/Ecma-262.htm).  

Turris.js is built using and [React.js](https://facebook.github.io/react/) with [react-router](https://github.com/rackt/react-router) and [Twitter Bootstrap CSS](http://getbootstrap.com/).  
All the client-side app code is managed and compiled by [Webpack](http://webpack.github.io/) and minified using [Uglify.js](https://github.com/mishoo/UglifyJS2) (when not in debug mode).  
[NPM](https://npmjs.org/) is used for the dependency management.  

[Gulp.js](http://gulpjs.com/) is used as a build-tool.  
Testing is done using [eslint](http://eslint.org/) for linting and code-style and [mocha.js](http://visionmedia.github.io/mocha/) with [should.js](https://github.com/visionmedia/should.js/) for automated testing.  

## Getting Started

### Requirements

For Turris.js to function properly, you'll need to have following things installed:

* [io.js](https://iojs.org/) v1.8+
* [NPM](https://npmjs.org/) v2.8+

Alternatively you can use [docker](https://www.docker.com/) environment provided by `turris:docker` generator.  

### Installation

```
$ npm install -g yo generator-turris
```

### Usage

```
$ yo turris
```

### API

`$ yo turris`  
Creates a new turris.js application.

## Learning Your Way Around

Once installed, you can create a basic application by following the prompts.

```shell
$ mkdir HelloWorld
$ cd HelloWorld
$ yo turris

     _-----_
    |       |    .--------------------------.
    |--(o)--|    |      Welcome to the      |
   `---------´   |    breathtaking Turris   |
    ( _´U`_ )    |        generator!        |
    /___A___\    '--------------------------'
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Your project name: (HelloWorld)
...
```

To run your application, just type `npm start`.

### Project Structure

Client:
- **/style/** - LESS files
- **/src/index.js** - App entry point
- **/src/app.jsx** - React app bootstrapper
- **/src/routes.js** - Routes for react-router
- **/src/app/** - React app definition with react-router setup
- **/src/component/** - React components folder
- **/src/component/chrome** - Application chrome React component
- **/src/component/chrome** - Application navigation bar React component
- **/src/pages/** - React pages folder
- **/src/pages/index** - Index page that's loaded by default
- **/src/pages/other** - Other page that's added for convenience

Misc:
- **/gulp/** - Custom Gulp tasks
- **/tests/** - Unit and functional tests
- **/buildConfig.js** - Build config config
- **/gulpfile.js** - Gulp bootstrapper
- **/webpack.config.js** - Webpack config for development
- **/webpack.config.prod.js** - Webpack config for production

## License

[MIT](http://opensource.org/licenses/MIT)
