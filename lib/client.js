var AWS = require('@aws-sdk/client-s3')

async function client(opt = {}) {
  var region = opt.region ?? process.env.AWS_REGION
  if (!region) {
    throw Error('AWS_REGION is missing.')
  }

  var accessKeyId = opt.accessKeyId ?? process.env.AWS_ACCESS_KEY_ID
  if (!accessKeyId) {
    throw Error('AWS_ACCESS_KEY_ID is missing.')
  }

  var secretAccessKey = opt.secretAccessKey ?? process.env.AWS_SECRET_ACCESS_KEY
  if (!secretAccessKey) {
    throw Error('AWS_SECRET_ACCESS_KEY is missing.')
  }

  var s3Client = new AWS.S3Client({
    region,
    credentials: { accessKeyId, secretAccessKey }
  })

  return s3Client
}

module.exports = client
