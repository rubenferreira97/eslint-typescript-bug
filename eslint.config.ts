import type { Config } from 'eslint/config';
import { defineConfig as configurations } from 'eslint/config';

import prettier from 'eslint-config-prettier/flat';
import imports from 'eslint-plugin-import';
import typescript from 'typescript-eslint';

export default configurations(
  typescript.configs.recommended,
  imports.flatConfigs.recommended,
  prettier,
  {
    rules: {
      /* - Rules - */
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', destructuredArrayIgnorePattern: '^' }],
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'separate-type-imports' }],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

      /* - Unsafe Rules - */
      'linebreak-style': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      'import/no-unresolved': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/preserve-manual-memoization': 'off',
      'react-hooks/use-memo': 'off',
    },
  },
) satisfies Config[];
