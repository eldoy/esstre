var { createPresignedPost } = require('@aws-sdk/s3-presigned-post')

async function presign(client, opt = {}) {
  try {
    var result = await createPresignedPost(client, {
      Bucket: opt.bucket,
      Key: opt.key,
      Expires: opt.expires ?? 60,
      Conditions: opt.conditions ?? []
    })

    return result
  } catch (err) {
    console.error('S3 presign error:', err.message)
  }
}

module.exports = presign
