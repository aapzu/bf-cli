const braincrunch = require('braincrunch')
const fs = require('fs')

const path = process.argv[2]
const input = process.argv[3]

if (!path) {
    console.error('Path must be specified')
    process.exit(1)
}

const file = fs.readFileSync(path)

new braincrunch.Machine({
    code: file.toString(),
    read: input,
    write: (n) => process.stdout.write(String.fromCharCode(n)),
}).run()
