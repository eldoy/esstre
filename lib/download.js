var AWS = require('@aws-sdk/client-s3')
var fs = require('node:fs')

async function download(client, opt = {}) {
  try {
    var cmd = new AWS.GetObjectCommand({
      Bucket: opt.bucket,
      Key: opt.key
    })

    var res = await client.send(cmd)
    var stream = fs.createWriteStream(opt.target)

    await new Promise(function (resolve, reject) {
      res.Body.pipe(stream)
      res.Body.on('error', reject)
      stream.on('close', resolve)
    })
  } catch (err) {
    console.error('S3 download error:', err.message)
  }
}

module.exports = download
