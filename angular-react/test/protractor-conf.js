exports.config = {
    allScriptsTimeout: 11000,
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    multiCapabilities: [
        {'browserName': 'chrome'},
        {'browserName': 'firefox'}
    ],
    
    specs: ['e2e/*.js'],
    
    baseUrl: 'http://localhost:8000/',
    
    framework: 'jasmine',
    
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};

