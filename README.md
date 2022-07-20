# tsc-fault-useRecoilCallback

This project is intended to demonstrate a fault in the TypeScript compiler,
reported [here in TypeScript issue 49966](
https://github.com/microsoft/TypeScript/issues/49966
).

### Instructions

1. `yarn`
2. `yarn check-types` (passes)
3. `git checkout feature-branch origin/feature-branch`
4. `yarn check-types` (faults)

The same change as checked out at step 3 is available [here as an open PR](
  https://github.com/llaenowyd/tsc-fault-useRecoilCallback/pull/1).
