# vue-ui

通过Vue写的一个前端ui框架
使用时请在css中设置 :

```css
    *{
        box-sizing: border-box;
    }
    :root{
    --button-height:32px;
    --font-size:14px;
    --button-bg:white;
    --button-active-bg:#eee;
    --border-radius:4px;
    --color:#333;
    --border-color:#999;
    --border-color-hover:#666;
    }
```
## 使用
通过 npm i vue-ui-01
然后 import UI from 'vue-ui-01'
import对象中提供了各种组件，在vue中注册组件即可使用