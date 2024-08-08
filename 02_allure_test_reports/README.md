# ALLURE

Allure test reporting.  

NOTES:

* Shows history of results
* Drill downs into tests

## Build

```sh
# build the image 
docker build --progress=plain -f Dockerfile.allure -t allure . 
```

## Run

### Jest

```sh
mkdir -p results
mkdir -p output

cd ./03_jest_testing
npm run test

# generate and serve
docker run -v $(pwd)/results:/allure-results -v $(pwd)/output:/allure-report -p 8080:8080 --name allure --rm -it allure 

# remove old results
rm -rf ./results
mkdir -p results
# copy history to results before running tests again
cp -R ./output/history ./results/history

npm run test
```

### Pytest

```sh
mkdir -p results
mkdir -p output

cd ./31_pytest
pipenv run test

# THIS IS BECAUSE pytest.ini is NOT WORKING
cp ./allure-results/* ../results

docker run -v $(pwd)/results:/allure-results -v $(pwd)/output:/allure-report -p 8080:8080 --name allure --rm -it allure 

```

## Troubleshooting

```sh
docker exec -it allure /bin/bash
```

## Resources

* #1 Automation Test Reporting Tool [here](https://allurereport.org/)
