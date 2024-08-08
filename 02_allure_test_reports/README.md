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
docker run -v $(pwd)/results:/allure-results -p 8080:8080 --name allure --rm -it allure 
```

## Troubleshooting

```sh
docker exec -it allure /bin/bash
```

## Resources

* #1 Automation Test Reporting Tool [here](https://allurereport.org/)
