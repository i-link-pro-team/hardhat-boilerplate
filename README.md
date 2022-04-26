# Smart contracts boilerplate
## Installation
```bash
$ npm use
```

```bash
$ npm install
```

## Development

### Creating smart contract
Create your smart contract in `contracts/` folder 

### Compilation
Set solidity version in hardhat.config.ts file, solidity -> compilers -> version, then run compilation

```bash
$ npx hardhat compile
```

### Running tests
Create your tests in test folder. To set typed test, describe types in `test.config.d.ts`. Then, use it with Mocha.Context (this)

Run tests with command:
```bash
$ npx hardhat test TEST_PATH
```

## Useful links
1. Hardhat documentation:
https://hardhat.org/getting-started/