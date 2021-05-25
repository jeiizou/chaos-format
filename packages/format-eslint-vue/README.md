# @chaos-kit/eslint-config-format-vue

> eslint config for personal project with vue3 + ts

## Usage

install:

```sh
@chaos-kit/eslint-config-formate-vue
```

usage:

```json
//  package.json
{
  ...
  "eslintConfig": {
    "root": true,
    "extends": "@chaos-kit/format-vue"
  },
}
```

## Rules

all plugins:

- [eslint:recommended](http://eslint.cn/docs/rules/)
- [vue/vue3-essential](https://eslint.vuejs.org/rules/)
- [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [prettier/@typescript-eslint, prettier/vue, prettier](https://github.com/prettier/eslint-config-prettier/blob/master/README.md)
- [prettier option](https://prettier.io/docs/en/options.html)


### Custom Rule Explain

#### Error

1. `no-async-promise-executor`: 禁止使用异步函数作为 Promise executor
2. `no-empty`: 禁止空块语句, 如果需要使用, 则应该添加注释
3. `no-debugger`: 禁止生产环境下的`debugger`
4. `no-extra-boolean-cast`: 禁止不必要的布尔转换
5. `no-func-assign`: 禁止对`function`声明的重新赋值
6. `no-inner-declarations` 禁止在嵌套的语句块中出现变量或 function 声明, const/let 除外
7. `no-prototype-builtins`: 禁止直接使用 Object.prototypes 的内置属性
8.  `no-extra-parens`: 禁止不必要的括号
9.  `require-atomic-updates`: 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
10. `use-isnan`: 要求调用 isNaN()检查 NaN
11. `class-methods-use-this`: 强制类方法使用 this
12. `default-case`: 要求switch必须含有default
13. `eqeqeq`: 使用强等判断
14. `dot-location`: 要求点操作符和属性放在同一行
15. `guard-for-in`: 强制需要约束 for-in
16. `no-alert`: 禁止 alert、confirm 和 prompt

```js
/*eslint guard-for-in: "error"*/
for (key in foo) {
    if (Object.prototype.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}

for (key in foo) {
    if ({}.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}
```

19. `no-fallthrough`: 禁止 case 语句落空
20. `no-global-assign`: 禁止对原生对象或只读的全局对象进行赋值
21. `no-with`: 禁止使用`with`
22. `no-delete-var`: 禁止删除变量
23. `no-undef`: 禁止使用未声明的变量
24. `block-scoped-var`: 禁止在作用域外调用变量
25. `no-var`: 禁止使用var
26. `prefer-const`: 能用const的地方必须使用const

#### Warn

1. `no-console`: 生产环境下`console`警告
2. `no-sparse-arrays`:稀疏数组警告
3. `no-unreachable`: return 后的不可达代码警告 
4. `no-empty-function`: 空函数警告
5. `no-await-in-loop`:  不禁止循环异步
6. `prefer-rest-params`: 推荐使用剩余参数而不是argument
7. `prefer-template`: 推荐使用模板字符串而不是字符串拼接
8. `no-extra-parens`: 禁止不必要的括号
9. `no-template-curly-in-string`: 模板字符串引用警告


### vue3 rule

1. `vue/no-deprecated-destroyed-lifecycle`: 不使用不推荐的生命周期

```js
export default {
  /* ✓ GOOD */
  beforeMount () {},
  mounted () {},
  beforeUnmount () {},
  unmounted () {},

  /* ✗ BAD */
  beforeDestroy () {},
  destroyed () {}
}
```

2. 不推荐使用`$listeners`, `$scopedSlots`, `$on`, `$off`, `$once`
3. `vue/no-deprecated-filter`: 不推荐使用filter语法

```vue
<template>
  <!-- ✓ GOOD -->
  {{ filter(msg) }}
  {{ filter(msg, '€') }}
  {{ filterB(filterA(msg)) }}
  <div v-bind:id="filter(msg)"></div>
  <div v-bind:id="filter(msg, '€')"></div>
  <div v-bind:id="filterB(filterA(msg))"></div>

  <!-- ✗ BAD -->
  {{ msg | filter }}
  {{ msg | filter('€') }}
  {{ msg | filterA | filterB }}
  <div v-bind:id="msg | filter"></div>
  <div v-bind:id="msg | filter('€')"></div>
  <div v-bind:id="msg | filterA | filterB"></div>
</template>
```

4. `vue/no-deprecated-functional-template`: 不推荐使用`functional template`
5. `vue/no-deprecated-props-default-this`: 不推荐在prop中使用this

```vue
<script>
export default {
  props: {
    a: String,
    b: {
      default () {
        /* ✗ BAD */
        return this.a
      }
    }
  }
}
</script>
```

6. `vue/no-deprecated-slot-attribute`: 使用推荐的slot语法

```vue
<template>
  <ListComponent>
    <!-- ✓ GOOD -->
    <template v-slot:name>
      {{ props.title }}
    </template>
  </ListComponent>
  <ListComponent>
    <!-- ✗ BAD -->
    <template slot="name">
      {{ props.title }}
    </template>
  </ListComponent>
</template>
```

7. `vue/no-deprecated-v-bind-sync`: 禁用`sync`绑定

```vue
<template>
  <!-- ✓ GOOD -->
  <MyComponent v-bind:propName="foo"/>
  <MyComponent :propName="foo"/>


  <!-- ✗ BAD -->
  <MyComponent v-bind:propName.sync="foo"/>
  <MyComponent v-bind:[dynamiArg].sync="foo"/>
  <MyComponent v-bind.sync="foo"/>
  <MyComponent :propName.sync="foo"/>
</template>
```

8. `vue/no-deprecated-v-on-native-modifier`: 禁用`native`
9. `vue/no-lifecycle-after-await`: 禁止在`await`之后写生命周期

```vue
<script>
import { onMounted } from 'vue'
export default {
  async setup() {
    /* ✓ GOOD */
    onMounted(() => { /* ... */ })

    await doSomething()

    /* ✗ BAD */
    onMounted(() => { /* ... */ })
  }
}
</script>
```

10. `vue/no-ref-as-operand`: 禁止直接操作ref值

```vue
<script>
import { ref } from 'vue'

export default {
  setup () {
    const count = ref(0)
    const ok = ref(true)

    /* ✓ GOOD */
    count.value++
    count.value + 1
    1 + count.value
    var msg = ok.value ? 'yes' : 'no'

    /* ✗ BAD */
    count++
    count + 1
    1 + count
    var msg = ok ? 'yes' : 'no'

    return {
      count
    }
  }
}
</script>
```

10. `vue/no-setup-props-destructure`: 禁止解构`prop`

```vue
<script>
export default {
  /* ✓ GOOD */
  setup(props) {
    watch(() => {
      console.log(props.count)
    })

    return () => {
      return h('div', props.count)
    }
  }
}
</script>
```

11. `vue/no-watch-after-await`: 禁止在`await`之后`watch`
12. `vue/require-slots-as-functions`: 强制以`function`方式调用`$slots`

```vue
<script>
export default {
  render(h) {
    /* ✓ GOOD */
    var children = this.$slots.default()
    var children = this.$slots.default && this.$slots.default()

    /* ✗ BAD */
    var children = [...this.$slots.default]
    var children = this.$slots.default.filter(test)
  }
}
</script>
```

### Rule for Typescript

recommand read:

- [《六》Typescript 最佳实践](https://mp.weixin.qq.com/s/Fi7RINtu71NuXM3GUmbiQQ)


1. `@typescript-eslint/adjacent-overload-signatures`

```ts
/* ✗ BAD */
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void;
  export function foo(sn: string | number): void;
}

/* ✓ GOOD */
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function foo(sn: string | number): void;
  export function bar(): void;
}
```

2. `@typescript-eslint/await-thenable`: 必须`await`一个`thenable`
3. `@typescript-eslint/explicit-module-boundary-types`: 在导出函数和类的公共类方法上要求显式的返回值和参数类型
4. `@typescript-eslint/no-empty-interface`: 禁止空的接口声明
5. `@typescript-eslint/no-explicit-any`: 允许any, 但不推荐, 如何不使用any参考[[译] 理解TypeScript 中 any 和 unknown](https://zhuanlan.zhihu.com/p/104296850)
6. `@typescript-eslint/no-for-in-array`: 禁止使用`for-in`遍历数组
7. `@typescript-eslint/no-this-alias`: 禁止重命名`this`
