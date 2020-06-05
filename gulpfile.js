const { watch } = require('gulp');

watch(['input/*.js', '!input/something.js'], function(cb) {
    // body omitted
    cb();
});