import love from 'eslint-config-love';

export default [
  {
    ...love,
    files: ['**/*.js', '**/*.ts']
  },
  {
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off'
    }
  }
];
