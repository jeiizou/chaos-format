# @chaos-kit/format-prettier

## Usage

install: 

```sh
// use yarn for example
yarn add -D @chaos-kit/format-prettier
```

config:

```json
// in package.json
{
  // ...
  "prettier": "@chaos-kit/format-prettier"
}
```

## Rule Default

- `printWidth: 80`: 单行字符数量上限为80
- `tabWidth: 4`: 字符缩进4个字符
- `useTabs: false`: 使用空格代替tab缩进
- `semi: true`: 尾分号跟随
- `singleQuote: true`: 强制单引号
- `quoteProps: consistent`: 只要有一个属性需要引号, 则所有属性增加引号
- `jsxSingleQuote: true`: jsx保持单引号
- `trailingComma: all`: 尾逗号总是跟随
- `bracketSpacing: true`: 对象的括号总是带空格
- `jsxBracketSameLine: false`: jsx的最后一行总是另起一行
- `arrowParens: always`: 箭头函数的参数括号总是存在
- `endOfLine: lf`: 行尾的换行符格式

## Rule should Provide

- `parser`: 提供格式化的解析器, 选项[在此](https://prettier.io/docs/en/options.html#parser)

