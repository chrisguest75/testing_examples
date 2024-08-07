# ALLURE

## Build

```sh
# build the image 
docker build --progress=plain -f Dockerfile.allure -t allure . 
```

## Run

```sh
mkdir -p results
docker run -v $(pwd)/results:/allure-results -p 8080:8080 --rm -it allure 
```

## Resources

* #1 Automation Test Reporting Tool [here](https://allurereport.org/)
