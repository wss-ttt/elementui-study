# element-ui文件解读
## 项目结构
  ```
  --packages // 存放的组件源码 主要研究对象
  --src
    --directives // 放置自定义指令
    --localse  // 指令
    --mixins // 放置组件用的混合文件
    --transitions // 放置动画配置文件
    --utils // 工具方法文件
    --index.js // 组件注册的入口文件
  ```
## 主入口文件
  * 在./src/index.js下,此入口文件继承了所有element-ui的组件，并为原型提供了一部分创建组件的捷径方法，也是webpack打包的入口文件
---
## 外部方法
  * 在./src/utils/...下面,此文件夹包含了element-ui库的大部分外部方法，用于优化，便捷一些核心组件内部的业务逻辑
---
## 核心业组件
  * 在./packages/...,此文件夹包含了element-ui所提供的API的核心代码实现，也是element-ui库的关键
---
## 样式文件
  * ./packages>theme-chalk>src: 单个组件的scss格式文件
  * ./packages>theme-chalk>lib: 单个组件的编译之后的css格式文件
  * ./packages>theme-chalk>common>var.scss: 存放的是sass全局变量
     * 其他的scss文件通过@import "common/var";该语句进行引用全局变量
  * ./packages>theme-chalk>fonts: 字体库
  * ./packages>theme-chalk>mixins: sass的mixins文件