module.exports = {
    root: true,
    env: { browser: true, node: true, es2023: true },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:nuxt/recommended',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'unused-imports'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'unused-imports/no-unused-imports': 'warn',
    },
    ignorePatterns: ['.nuxt', '.output', 'dist', 'node_modules'],
    settings: {
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
}
