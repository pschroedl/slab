// Break up gulp tasks into modules in /tasks
var requireDir = require('require-dir');
requireDir('./tasks', { recurse: true });