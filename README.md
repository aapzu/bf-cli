# bf-cli

A simple wrapper around [`braincrunch`](https://www.npmjs.com/package/braincrunch) to execute Brainfuck files easily straight from the command line.

## Usage
With `npm >= 5.2.0`
```
npx bf-cli [<PATH_TO_FILE>] [<INPUT>]
```
or with `npm < 5.2.0`
```
$ npm i -g bf-cli && bf-cli [<PATH_TO_FILE>] [<INPUT>]
```

## Examples
In `examples` there are a couple of example files.

`helloWorld.bf`
```
$ bf-cli examples/helloWorld.bf
```
prints
```
$ Hello World!
```

`readInput.bf` reads one character in, raises the value of it by one and prints it
```
$ bf-cli examples/readInput.bf a
```
prints
```
$ b
```
