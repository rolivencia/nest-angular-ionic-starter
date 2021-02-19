module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'rxjs'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:rxjs/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-empty-function': ['error', { allow: ['constructors'] }],
        'rxjs/finnish': [
            'error',
            {
                functions: false,
                methods: false,
                names: {
                    '^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
                },
                parameters: false,
                properties: true,
                types: {
                    '^EventEmitter$': false,
                },
                variables: true,
            },
        ],
    },
};
