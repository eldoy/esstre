var AWS = require('@aws-sdk/client-s3')

async function remove(client, opt = {}) {
  try {
    var cmd = new AWS.DeleteObjectCommand({
      Bucket: opt.bucket,
      Key: opt.key
    })
    await client.send(cmd)
  } catch (err) {
    console.error('S3 remove error:', err.message)
  }
}

module.exports = remove
