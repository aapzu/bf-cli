const sinon = require("sinon")
const assert = require("assert-diff")

const INDEX_PATH = '../index.js'

const helloWorld = require.resolve("../examples/helloWorld.bf")
const readInput = require.resolve("../examples/readInput.bf")

describe('bf-cli', () => {
    let oldArgv
    let stdoutValue = ""
    const log = sinon.stub(console, 'log')
    const error = sinon.stub(console, 'error')
    const exit = sinon.stub(process, 'exit')
        .callsFake((val) => {
            throw new Error(`Exit called with val: ${val}`)
        })
    const write = sinon.stub(process.stdout, "write")
        .callsFake((val) => {
            stdoutValue += val
        })

    beforeEach(() => {
        oldArgv = process.argv
    })

    afterEach(() => {
        log.reset()
        error.reset()
        exit.reset()
        process.argv = oldArgv
        stdoutValue = ""
    })

    it('requires the filename', () => {
        process.argv = []
        assert.throws(() => require(INDEX_PATH))
        assert(error.calledWith("Path must be specified"))
        expect(exit.calledOnce)
        expect(exit.calledWith(1))
    })

    it("prints the result", () => {
        process.argv = [null, null, helloWorld]
        require(INDEX_PATH)
        assert.equal(stdoutValue, "Hello World!\n")
    })

    it("reads the input", () => {
        process.argv = [null, null, readInput, "r"]
        require(INDEX_PATH)
        assert.equal(stdoutValue, "s")
    })
})