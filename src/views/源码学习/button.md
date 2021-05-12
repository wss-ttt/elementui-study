### button组件解读
#### 1.button.scss文件
  * 需要引入全局的common/var.scss文件,使用其中的全局颜色变量
  * 当前文件中定义@include b(button) 主方法
### 2.button.vue文件
  * 核心的props参数值: 
     * type: button的样式值(primary, success, warning等) String 类型
     * disabled: 控制按钮是否禁用 Boolean类型
     * round: 控制圆角按钮 Boolean类型
     * circle: 圆形按钮 Boolean类型
     * loading: 是否为加载按钮
     * size: 控制按钮大小
  * 核心计算属性
     * buttonSize: 依赖props中的size属性值进行控制按钮大小
     * buttonDisabled: 依赖props中的disabled属性值控制按钮的禁用状态
  * 核心方法
     * handleClick: 暴露按钮单击事件方法接口
