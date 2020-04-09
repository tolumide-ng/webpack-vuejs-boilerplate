module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'plugin:vue/essential',
		'airbnb-base',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['vue', 'import'],
	rules: {
		indent: ['error', 2],
	},
}
