module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['add', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
  },
}
