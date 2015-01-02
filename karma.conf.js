module.exports = function(config) {
  config.set({
    basePath: '',
    
    frameworks: ['mocha'],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],

    preprocessors: { 'dist/kondico.js': ['coverage'] },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },

    files: [
      'test/vendor/**/*.js',
      'dist/kondico.js',
      'test/**/*.js',
    ],

    client: {
      mocha: {
        ui: 'tdd',
        timeout: '5000'
      }
    },

    port: 9876,
    logLevel: config.LOG_INFO,
    colors: true,
    singleRun: false
  });
};
