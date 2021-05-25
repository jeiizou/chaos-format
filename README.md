# @chaos-kit/format

My common code format rule with prettier & eslint

## format list

- [format-eslint-vue](./packages/format-eslint-vue/README.md): eslint config for vue3 + ts project
- [format-prettier](./packages/format-prettier/README.md): prettier config for common project

## vscode extension recommand

1. eslint
2. prettier
3. vetur

```sh
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension yoyo930021.vuter
```

with config file recommand:

create or over `<rootPath>/.vscode/settings.json`:

```json
{
    "eslint.validate": [
        "javascript",
        "vue"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true // 保存时自动修复eslint
    },
    "editor.formatOnSave": true, // 保存时自动格式化代码
    "vetur.format.defaultFormatter.html": "js-beautify-html", // 不使用prettier格式化html
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-expand-multiline",
            "indent_size": 4
        },
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
}
```
