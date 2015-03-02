#slate
## a devlopment template

Just a simple setup to have a few handy dev features ready right out of the box.

I wanted to only include what I felt necessary to get a simple bit of javascript served up handily, so currently there are no build steps or transformation for HTML or CSS - just JS.

* [Gulp] - for automation, in js
* [Browserify] - for modularity and transformations ( still to come )
* [JSHint] and [JSCS] - static analysis that I've grown to love
* [liveReload] - support for auto reloading via browser plugin
* [Hapi] and [node.js] - a lovely nodejs based server, setup as a static fileserver


###useage
first off, make sure to 
```
npm install
```

To build the source simply type :

```
gulp 
```

Or to lint/watch/reload for development :
```
gulp dev
```

Start the hapi server:
```
npm start
```

Then, Navigate to localhost:3000 to see 'Hello World' in its very own div and open your dev console to witness the glory of 'successfully loaded bundle.js'

### Todo's

 - Include Testing libraries - karma/mocha,chai,sinon 
 - REST Endpoint scaffolding/Hapi Plugins?
 - Additional transformations as a part of build e.g. : ES6/CSS/HBS/JSX ( even though they were kindof excluded by design ... we'll see - maybe I will create separate repo's or modules for each )

###License

MIT

**Free Software, Hell Yeah!**
[Browserify]:http://browserify.org
[JSHint]:http://jshint.com
[JSCS]:http://jscs.info
[liveReload]:http://livereload.com
[Hapi]:http://hapijs.com
[node.js]:http://nodejs.org
[jQuery]:http://jquery.com
[Gulp]:http://gulpjs.com
