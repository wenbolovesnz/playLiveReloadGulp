module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            'js/*.js',
            'test/*.spec.js'
        ]
    });
};