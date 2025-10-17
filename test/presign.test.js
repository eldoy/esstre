var s3 = require('../index.js')

async function main() {
  var client = await s3.client()

  var opt = {
    bucket: '7ino',
    key: 'images/file-4bZtP9m.txt'
  }
  var result = await s3.presign(client, opt)
  console.log(result)

  process.exit()
}

main()
