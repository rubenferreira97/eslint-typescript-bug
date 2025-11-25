
# ESlint `no-unused-vars` false-positive

This repository demonstrates a false-positive ESLint error reported by `@typescript-eslint/no-unused-vars` in `src/index.ts` where `Database` is defined but reported as unused.

Repository layout

- `package.json` - project config
- `tsconfig.json` - TypeScript config
- `eslint.config.ts` - ESLint configuration
- `src/database.ts` - exports `Database` type or class
	- Note: `src/database.ts` in this example uses `export namespace Database` (a TypeScript namespace export).
- `src/index.ts` - imports/uses `Database` but ESLint reports it as unused

Reproduction steps

1. Install dependencies:

```cmd
bun install
```

2. Run ESLint script (`lint` : `bunx --bun eslint`):

```cmd
bun lint
```

Expected result

- ESLint should not report `'Database' is defined but never used` when `Database` is actually used in `src/index.ts`.

Actual result

- ESLint incorrectly reports: `"'Database' is defined but never used.eslint@typescript-eslint/no-unused-vars"`.