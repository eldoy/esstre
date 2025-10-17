var s3 = require('../index.js')
var path = require('node:path')

var CODE = '4bZtP9m'

async function main() {
  var client = await s3.client()

  var source = path.join(process.cwd(), 'test', 'files', `file-${CODE}.txt`)

  var opt = {
    bucket: '7ino',
    key: `images/file-${CODE}.txt`,
    source
  }

  await s3.upload(client, opt)

  process.exit()
}

main()
