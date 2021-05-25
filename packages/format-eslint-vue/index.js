module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        // style
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],

        // eslint error
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'block-scoped-var': 'error', // 禁止在作用域外调用变量
        'eqeqeq': 'error', // 使用强等判断
        'class-methods-use-this': 'error', // 强制类方法使用 this
        'default-case': 'error', // 要求switch必须含有default
        'no-eq-null': 'error', // 禁止null进行弱比较
        'no-floating-decimal': 'error', // 强制先导0
        'no-iterator': 'error', // 禁止废弃属性 __iterator__
        'no-return-assign': 'error', // 禁止return中的赋值语句
        'no-useless-concat': 'error', // 禁止不必要的字符串拼接
        'no-use-before-define': 'error', // 禁止在变量声明前使用他们
        'no-duplicate-imports': 'error', // 禁止重复模块导入
        'no-useless-rename': 'error', // 禁止在import/export中解构引用为同名值
        'no-var': 'error', // 禁止 var
        'dot-location': ['error', 'property'], // 要求点操作符和属性放在同一行
        'guard-for-in': 'error', // 需要约束 for-in
        'no-alert': 'error', // 禁止 alert、confirm 和 prompt
        'prefer-const': 'error', // 能用const的地方使用const

        // eslint warn
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-sparse-arrays': 'warn', // 稀疏数组警告
        'no-template-curly-in-string': 'warn', // 模板字符串引用警告
        'no-empty-function': 'warn', // 空函数警告
        'prefer-rest-params': 'warn', // 推荐使用剩余参数而不是argument
        'prefer-template': 'warn', // 推荐使用模板字符串而不是字符串拼接
        'no-unreachable': 'warn', // 警告不可达代码

        // eslint off
        'no-await-in-loop': 'off', // 不禁止循环异步
        'no-fallthrough': 'off', // 不禁止case落空

        // vue
        // 多属性必须分行
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
        {
            files: ['**/*.{ts,vue}'],
            parser: 'vue-eslint-parser',
            extends: ['plugin:@typescript-eslint/recommended'],
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            plugins: ['@typescript-eslint'],
            rules: {
                // typescript
                '@typescript-eslint/no-explicit-any': 'off',
                'prefixWithI': 'off',
            },
        },
        {
            files: ['**/*.vue'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
};
