# mobileModal
移动端基础组件

//alert

mobileModal.alert(

    '提示内容',//必填

    //回调函数(可选)
    function () {
        self.nowVal = '确定按钮';
    }
    
);



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

其它请查看地址：

https://xingchou.github.io/pluginApp/dist/index.html#/index



