var s3 = require('../index.js')

async function main() {
  var client = await s3.client()

  var opt = {
    bucket: '7ino',
    prefix: 'images/'
  }
  var files = await s3.list(client, opt)

  console.log(files)

  process.exit()
}

main()
