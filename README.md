# mobileModal
移动端基础组件


## alert
```javascript
//alert
mobileModal.alert(
    '提示内容',//必填

    //回调函数(可选)
    function () {
        self.nowVal = '确定按钮';
    }
);
```

## confirm
```javascript
//confirm
mobileModal.confirm(
    '标题',//必填

    '提示内容',//必填

    //确定按钮回调函数（可选）
    function () {
        self.nowVal = '确定按钮';
    },

    //取消按钮回调函数（可选）
    function () {
        self.nowVal = '取消按钮';
    }
);
```

## toast
```javascript
//toast
var content = '提示内容';//可选
mobileModal.toast(content);
```

## pageLoader
```javascript
//页面加载pageLoader

// 显示动画
var content = '提示内容';//可选
mobileModal.showPageLoader(content);

// 关闭动画
mobileModal.hidePageLoader();
```

## preLoader
```javascript
//预加载preLoader

// 显示动画
var content = '提示内容';//可选
mobileModal.showPreLoader(content);

// 关闭动画
mobileModal.hidePreLoader();
```

more...

## demo：

https://xingchou.github.io/pluginApp/dist/index.html



