# REPORT PORTAL

TODO:

* Get it working with an upload

## Start

```sh
docker-compose -p reportportal up -d --force-recreate

open http://localhost:8080

Default User: default\1q2w3e
Administrator: superadmin\erebus
```

## Cleanup

```sh
docker-compose -p reportportal down
```

## API

http://localhost:8080/ui/#api

export TOKEN=""
curl -L -X POST 'http://localhost:8080/api/v1/plugin/superadmin_personal/junit/import' \
-H 'Content-Type: multipart/form-data' \
-H 'Authorization: Bearer {token}' \
-F 'file=@"file_path.zip";type=application/x-zip-compressed' \
-F 'launchImportRq="{
  \"attributes\": [
    {
      \"key\": \"skippedIsNotIssue\",
      \"system\": true,
      \"value\": \"true\"
    }
  ],
  \"description\": \"Custom launch description\",
  \"mode\": \"DEFAULT\",
  \"name\": \"Custom launch name\",
  \"startTime\": \"2023-11-08T10:23:34.259Z\"
}";type=application/json'

## Resources

* https://reportportal.io/#documentation
* https://reportportal.io/docs/tutorial/