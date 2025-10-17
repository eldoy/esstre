# Stre S3 Client

This is a thin wrapper around the Amazon S3 SDK client.

### Install

```
npm i stre
```

### Usage

```js
var s3 = require('stre')
var config = {
  region: 'eu-north-1',
  accessKeyId: 'my_access_key_id,
  secretAccessKey: 'my_secret_access_key'
}
var client = await s3.client(config)

// Upload file
var opt = {
  bucket: 'bucket',
  key: 'images/file.jpg',
  source: './files/file.jpg'
}
await s3.upload(client, opt)

// Download file
var opt = {
  bucket: 'bucket',
  key: 'images/file.jpg',
  target: './files/file.jpg'
}
await s3.download(client, opt)

// List files
var opt = {
  bucket: 'bucket',
  prefix: ''
}
await s3.list(client, opt)
```

Config can be defined from the command line:
```
AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

ISC Licensed. Enjoy!