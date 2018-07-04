module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'semi': 'off',
    'comma-dangle': 'off',
    'no-underscore-dangle': 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": 1
  }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}