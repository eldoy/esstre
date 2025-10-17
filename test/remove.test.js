var s3 = require('../index.js')

async function main() {
  var client = await s3.client()

  var opt = {
    bucket: '7ino',
    key: 'images/file-4bZtP9m.txt'
  }
  await s3.remove(client, opt)

  process.exit()
}

main()
