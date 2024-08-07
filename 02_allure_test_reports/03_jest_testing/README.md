# README

Demonstrates how to test typescript code (including debugging) in Jest  

## Reason

Pretty obvious why I need to use a test framework.  

* Can I measure performance?  CPU and memory usage?

## Using Jest

```sh
nvm use 

# install packages 
npm install

# get options
npm exec -- jest --help         

# run tests 
npm run test

# run tests with detect open handles 
npm run test:debug

# include coverage
npm run coverage
```

## Filtering tests

```sh
# only want to run a specific test file
npm run test 'tests/wordstore.test.ts' 

# watch and filter
npm run test -- --watch 'tests/wordstore.test.ts'                       
```

## Single step debugging

Make sure you are in the `03_jest_testing` folder. Then use the `vscode` debug extension to select a profile to debug.  
There is an example of running just the filtered tests as well as all of them.  Set breakpoints and debug.  

## Resources

* [jestio](https://jestjs.io/)  
https://www.npmjs.com/package/jest-allure
