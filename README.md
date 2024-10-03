# Minimal example to make Jest work in TypeScript

## To make from scratch

Use Node 20. You can install it using [nvm][nvm].

Make a new directory and run these commands in it in Bash.

```bash
npm i --save-dev typescript
npm install --save-dev jest ts-jest @types/jest @tsconfig/node20
npx ts-jest config:init
```

Use VS Code to set Jest as the standard test runner in `package.json`.

```json
{
  "scripts": {
     "test": "jest"
  }
}
```

Use VS Code to add the community base configuration for TypeScript for Node 20 (TSConfig) in `tsconfig.json`.

```json
{
    "extends": "@tsconfig/node20/tsconfig.json"
}
```

Jest fails because it finds no tests.

```console
$ npm run test

> test
> jest

No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /tmp/dir.Om9
  3 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 3 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```

Use VS Code to create a sanity test that `true` is "truthy" in `index.test.ts`.

```ts
describe("describe1", () => {
    test("test1", () => {
        expect(true).toBeTruthy()
    })
})
```

Jest passes the test suite.

```text
$ npm run test

> test
> jest

ts-jest[config] (WARN) message TS151001: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
 PASS  ./index.test.ts
  describe1
    ✓ test1 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.465 s
Ran all test suites.
```

Use VS Code to create an `add` function in `index.ts`.

```ts
export function sum(a: number, b: number): number {
    return a + b;
}
```

And add a test that `1+1=2` in `index.test.ts`.

```ts
import { sum } from './index'

describe("describe1", () => {
    test("test1", () => {
        expect(true).toBeTruthy()
    })

    test("sum", () => {
        expect(sum(1,1)).toBe(2)
    })
})
```

Jest passes both tests.

```text
$ npm run test

> test
> jest

ts-jest[config] (WARN) message TS151001: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
 PASS  ./index.test.ts
  describe1
    ✓ test1 (2 ms)
    ✓ sum (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.219 s
Ran all test suites.
```

## Acknowledgements

Thanks to Felix Owino, who shared a repo like this and steps to create it on [Medium][felix]. Felix's step-by-step instructions didn't work for me, although I could run his example repo without modifications. From his post I learned about the TSConfig bases that I need to get VS Code to understand Jest's magic global imports.

Thanks to Ivan Dimitrijevic, who posted on [Medium][dimi] with the simplest set of steps I could find that actually worked for me.

As he says, "When you google about Jest you will find that its popularity lies in the fact that requires zero setup.". As he shows, this is false.

Thanks to Alex Dan, who shared a video tutorial on [YouTube][concise] of how to write tests for AWS CDK using Jest. CDK is what compels me to use TypeScript. He shared a general tip to add the simplest possible sanity test to check that the dependencies are working.

As he says, "No code is the best code". As we know, this is deeply true.

<!-- References -->

[concise]: https://www.youtube.com/watch?v=b6p25GzGsAE
[dimi]: https://medium.com/@dimi_2011/tdd-unit-testing-typescript-project-with-jest-2557e8b84414
[felix]: https://dev.to/ghostaram/configuring-jest-for-typescript-unit-tests-4iag
[nvm]: https://github.com/nvm-sh/nvm
