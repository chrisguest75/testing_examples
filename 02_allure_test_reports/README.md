# ALLURE

Allure test reporting.  

## Build

```sh
# build the image 
docker build --progress=plain -f Dockerfile.allure -t allure . 
```

## Run

```sh
mkdir -p results
mkdir -p output

cd ./03_jest_testing
npm run test

docker run -v $(pwd)/results:/allure-results -v $(pwd)/output:/allure-report -p 8080:8080 --name allure --rm -it allure 
```

## Troubleshooting

```sh
docker exec -it allure /bin/bash

allure generate --output /allure-report /allure-results --clean
```

## Resources

* #1 Automation Test Reporting Tool [here](https://allurereport.org/)
