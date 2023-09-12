module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recomended',
        'plugin:@typescript-eslint/recomended',
    ],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-used-vars': ['error'],
        '@typescript-eslint/no-var-requires': 'off',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-oundary-types': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}