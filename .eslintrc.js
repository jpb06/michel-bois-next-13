module.exports = {
  root: true,
  plugins: ['import', 'prettier', '@typescript-eslint'],
  extends: [
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'next',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    es2020: true,
    jest: true,
    node: true,
  },
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    'block-spacing': ['error'],
    camelcase: [
      'off',
      {
        properties: 'never',
      },
    ],
    complexity: [
      'error',
      {
        max: 15,
      },
    ],
    'computed-property-spacing': ['error', 'never'],
    'default-case': ['off'],
    'default-case-last': ['off'],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    eqeqeq: 'error',
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-style': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
        },
        pathGroups: [
          {
            pattern: '{@testing-library/**}',
            group: 'external',
          },
          {
            pattern: '~/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'lines-between-class-members': 'error',
    'newline-per-chained-call': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-dupe-keys': 'error',
    'no-else-return': 'error',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-implicit-coercion': 'error',
    'no-invalid-this': 'error',
    'no-lonely-if': 'error',
    'no-multi-spaces': 'error',
    'no-return-await': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-useless-return': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prettier/prettier': 'error',
    'template-curly-spacing': ['error', 'never'],
    'arrow-body-style': ['error', 'as-needed'],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    curly: 'error',
    'tailwindcss/classnames-order': ['off'],
  },
};
