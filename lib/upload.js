var fs = require('node:fs')
var mime = require('mime-types')
var AWS = require('@aws-sdk/client-s3')

async function upload(client, opt = {}) {
  try {
    var stat = await fs.promises.stat(opt.source)
    var stream = fs.createReadStream(opt.source)
    var type = mime.lookup(opt.source) || 'application/octet-stream'
    var cmd = new AWS.PutObjectCommand({
      Bucket: opt.bucket,
      Key: opt.key,
      Body: stream,
      ContentType: type,
      ContentLength: stat.size
    })
    await client.send(cmd)
  } catch (err) {
    console.error('S3 upload error:', err.message)
  }
}

module.exports = upload
