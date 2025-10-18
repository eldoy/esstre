var AWS = require('@aws-sdk/client-s3')

async function client(config = {}) {
  config.region ||= process.env.AWS_REGION
  if (!config.region) {
    throw Error('AWS_REGION is missing.')
  }

  config.credentials ||= {}
  config.credentials.accessKeyId ||= process.env.AWS_ACCESS_KEY_ID

  if (!config.credentials.accessKeyId) {
    throw Error('AWS_ACCESS_KEY_ID is missing.')
  }

  config.credentials.secretAccessKey ||= process.env.AWS_SECRET_ACCESS_KEY

  if (!config.credentials.secretAccessKey) {
    throw Error('AWS_SECRET_ACCESS_KEY is missing.')
  }

  var s3Client = new AWS.S3Client(config)

  return s3Client
}

module.exports = client
