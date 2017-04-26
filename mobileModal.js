/**
 * mobileModal v1.0 Created by zx.
 */
(function (window, document, Math) {
    var mobileModal = {
        //alert提示窗
        alert: function(content, callBack) {
            var self = this;
            document.addEventListener('touchmove', self.touchDefault, false);

            //禁止滑动
            var modalBox = document.querySelector(".dialog-box");
            if( modalBox ) {
                document.body.removeChild(modalBox);
            }

            var modalParent = document.createElement("div"); //父节点
            modalParent.className = "zx-mask dialog-box";
            var modalEl = '<div><h1>提示</h1><p>'+ content +'</p><a id="alertBtn">确定</a></div>';
            modalParent.innerHTML = modalEl;//添加到父节点
            document.body.appendChild(modalParent);//添加到body

            //点击事件
            document.querySelector("#alertBtn").addEventListener("touchend", function(e) {
                e.preventDefault();
                e.stopPropagation();
                document.body.removeChild(modalParent);
                document.removeEventListener('touchmove', self.touchDefault, false);
                if(callBack) {
                    callBack();
                }
            }, false);
        },

        //confirm提示窗
        confirm: function(title, content, callBackOk, callBackCancel) {
            var self = this;
            document.addEventListener('touchmove', self.touchDefault, false);

            //禁止滑动
            var modalBox = document.querySelector(".dialog-box");
            if(modalBox) {
                document.body.removeChild(modalBox);
            }

            var modalParent = document.createElement("div"); //父节点
            modalParent.className = "zx-mask dialog-box";
            var confirmEl = '<div><h1>'+ title +'</h1><p>'+ content +'</p><a>' +
                '<i id="confirmOk">确定</i><i id="confirmCancel">取消</i></a></div>';
            modalParent.innerHTML = confirmEl;//添加到父节点
            document.body.appendChild(modalParent);//添加到body

            //点击事件-确定
            document.querySelector("#confirmOk").addEventListener("touchend", function(e) {
                e.preventDefault();
                e.stopPropagation();
                document.body.removeChild(modalParent);
                document.removeEventListener('touchmove', self.touchDefault, false);
                if(callBackOk) {
                    callBackOk();
                }
            }, true);

            //点击事件-取消
            document.querySelector("#confirmCancel").addEventListener("touchend", function(e) {
                e.preventDefault();
                e.stopPropagation();
                document.body.removeChild(modalParent);
                document.removeEventListener('touchmove', self.touchDefault, false);
                if(callBackCancel) {
                    callBackCancel();
                }
            }, true);
        },

        //toast
        toast: function(content) {
            var self = this;
            var modalBox = document.querySelector(".toast-box");
            if( modalBox ) {
                return;
            }

            var toast_div = document.createElement("div"); //父节点
            toast_div.className = "toast-box"; //classname
            var toast_p = document.createElement("p"); //子节点p
            var p_node = document.createTextNode(content); //text文本

            toast_p.appendChild(p_node);
            toast_div.appendChild(toast_p);
            document.body.appendChild(toast_div);

            setTimeout(function() {
                document.body.removeChild(toast_div);
            }, 2000);
        },


        /********************** viewImage ***************************/
        viewImage: function(bigImage) {
            var self = this;
            var modalBox = document.querySelector(".view-image");
            if( modalBox ) {
                return;
            }

            //禁止body滚动
            document.body.className = 'stop-body';

            var viewImage = document.createElement("div"); //父节点
            viewImage.className = "view-image";
            viewImage.style.display = "block";

            // 加载动画
            var imageEl = '<div><div class="view-loadimg"><div><span></span></div></div></div>';
            viewImage.innerHTML = imageEl;
            document.body.appendChild(viewImage);

            var nowImage = new Image();
            nowImage.onload = function() {
                var w = nowImage.width;
                var h = nowImage.height;

                var imgStyle = 'width: 100%; height: auto;';
                if( w / 2 > h ){
                    imgStyle = 'width: auto; height: 100%;';
                }

                setTimeout(function() {
                    // 大图
                    var imageEl = '<div><p><img style="'+ imgStyle +'" src="' + nowImage.src + '" /></p></div>';
                    viewImage.innerHTML = imageEl;
                }, 500);
            };
            nowImage.src = bigImage;

            //点击事件
            viewImage.addEventListener("click", function(e) {
                e.stopPropagation();
                e.preventDefault();

                //开启body滚动
                document.body.className = '';
                document.body.removeChild(viewImage);
            }, false);
        },

        /*******************菊花loading效果********************/
        showPreLoader: function(content) {
            var self = this;
            self.stopTouchEvent();//禁止touch

            var modalBox = document.querySelector("div.preLoader");
            if( modalBox ) {
                document.body.removeChild(modalBox);
            }

            var modalParent = document.createElement("div"); //父节点
            var modalChild = document.createElement("div"); //子div
            modalChild.innerHTML = '<div><span></span><span></span><span></span>' +
                '<span></span><span></span><span></span><span></span><span></span>' +
                '<span></span><span></span><span></span><span></span></div>';

            //有提示文字
            if(content) {
                var contentEl = document.createElement("p"); //p
                var contentNode = document.createTextNode(content); //text文本
                contentEl.appendChild(contentNode);
                modalChild.appendChild(contentEl);
                modalParent.className = "zx-mask preLoader";
            }else{
                modalParent.className = "zx-mask preLoader min-loader";
            }

            modalParent.appendChild(modalChild);

            //添加到body
            document.body.appendChild(modalParent);
        },
        //关闭动画
        hidePreLoader: function() {
            var self = this;
            var modalBox = document.querySelector("div.preLoader");
            if( modalBox ) {
                self.startTouchEvent();
                document.body.removeChild(modalBox);
            }
        },

        /**********************页面loading动画***************************/
        showPageLoader: function(content) {
            var self = this;
            self.stopTouchEvent();//禁止touch

            var modalBox = document.querySelector(".page-loader");
            if( modalBox ) {
                document.body.removeChild(modalBox);
            }

            var modalParent = document.createElement("div"); //父节点
            var modalChild = document.createElement("div");
            modalChild.innerHTML = "<div><span></span><span></span></div>";

            //有提示文字
            if(content) {
                var contentEl = document.createElement("p"); //p
                var contentNode = document.createTextNode(content); //text文本
                contentEl.appendChild( contentNode );
                modalChild.appendChild( contentEl );
            }

            modalParent.appendChild( modalChild );
            modalParent.className = "zx-mask page-loader";
            document.body.appendChild( modalParent );//添加到body
        },
        //关闭page-loader动画
        hidePageLoader: function() {
            var self = this;
            var modalBox = document.querySelector(".page-loader");
            modalBox.className = "zx-mask page-loader clear-page-loader";
            if( modalBox ) {
                setTimeout(function () {
                    self.startTouchEvent();
                    document.body.removeChild( modalBox );
                }, 500);
            }
        },

        //禁止默认事件
        touchDefault: function (e) {
            e.stopPropagation();
            e.preventDefault();
        },
        //禁止touch事件
        stopTouchEvent: function () {
            var self = this;
            document.addEventListener('touchstart', self.touchDefault, false);
            document.addEventListener('touchmove', self.touchDefault, false);
            document.addEventListener('touchend', self.touchDefault, false);
        },
        //启动touch事件
        startTouchEvent: function () {
            var self = this;
            document.removeEventListener('touchstart', self.touchDefault, false);
            document.removeEventListener('touchmove', self.touchDefault, false);
            document.removeEventListener('touchend', self.touchDefault, false);
        }
    };

    if ( typeof module != 'undefined' && module.exports ) {
        module.exports = mobileModal;
    } else {
        window.mobileModal = mobileModal;
    }
})(window, document, Math);



