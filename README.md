#slate
## a development foundation

* [Gulp] - Build automation in js
* [Browserify] - Client side CommonJS Modules and build transformations
* [Bower] - Client side package management
* [JSHint] and [JSCS] - static analysis that I've grown to love and hate
* [liveReload] - support for auto reloading via browser plugin
* [Node.js] and [Hapi] - NodeJS server and framework
* [Mocha] and [Chai] - Test Framework and Assertion library

###Structure
- public/
  - bower_components/
  - js/  *destination for built src.js*
  - index.html
- src
  - client/
  - server/
- spec/  *test definitions, same heirarchy as src/*
- tasks/  *gulp tasks*


###Useage
First off, make sure to
```
npm install
```
And if they're not already globally available,
```
npm install -g gulp
npm install -g bower
```
Finish that all up with a quick
```
bower install
```

Build the source

```
gulp
```

Start the node server ( equivalent to nodemon src/server/index.js )
```
npm start
```
Navigate to localhost:3000 to see 'Hello World' in its very own div and open your dev console to witness the glory of 'successfully loaded bundle.js'

Gulp tasks include :
* 'test'
* 'lint'
* 'jscs'
* 'build'
and
* 'watch'

Run tasks individually, or, to watch for changes in src/ and automatically lint, jscs, test, and reload the browser, use :
```
gulp dev
```

### Todo
 - Build basic REST endpoint, setup Sinon
 - Sass
 - HTML Templating
 - ES6 support

###License

MIT

**Free Software, Hell Yeah!**
[Browserify]:http://browserify.org
[Bower]:http://bower.io
[JSHint]:http://jshint.com
[JSCS]:http://jscs.info
[liveReload]:http://livereload.com
[Hapi]:http://hapijs.com
[Node.js]:http://nodejs.org
[jQuery]:http://jquery.com
[Gulp]:http://gulpjs.com
[Mocha]:http://mochajs.org
[Chai]:/http://chaijs.com
