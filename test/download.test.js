var path = require('node:path')
var s3 = require('../index.js')

var CODE = '4bZtP9m'

async function main() {
  var client = await s3.client()

  var target = path.join(process.cwd(), 'test', 'files', `file-${CODE}.txt`)

  var opt = {
    bucket: '7ino',
    key: `images/file-${CODE}.txt`,
    target
  }

  await s3.download(client, opt)

  process.exit()
}

main()
