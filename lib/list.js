var AWS = require('@aws-sdk/client-s3')

async function list(client, opt = {}) {
  try {
    var files = []
    var token = null
    do {
      var cmd = new AWS.ListObjectsV2Command({
        Bucket: opt.bucket,
        Prefix: opt.prefix || '',
        ContinuationToken: token
      })
      var res = await client.send(cmd)

      if (res.Contents) {
        for (var i = 0; i < res.Contents.length; i++) {
          files.push(res.Contents[i].Key)
        }
      }
      token = res.IsTruncated ? res.NextContinuationToken : null
    } while (token)
  } catch (err) {
    console.error('S3 list error:', err.message)
  }

  return files
}

module.exports = list
