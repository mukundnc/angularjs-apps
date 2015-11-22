module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js',
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular-route.min.js',
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular-mocks.js',
      'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular-cookies.min.js',
      'http://cdn.jsdelivr.net/angular.bootstrap/0.11.0/ui-bootstrap-tpls.min.js',
      'app/js/app.js',
      'app/js/**/*.js',
      'test/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    preprocessors : {
      'app/js/**/*.js': 'coverage',
      'app/partials/*.html': 'ng-html2js'
    },
    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'app/',
      // stripSufix: '.ext',
      // prepend this to the
      prependPrefix: '../'
    },
    reporters : ['progress', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};