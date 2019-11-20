requirejs.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        index: "./index",
        carousel: './slidejs/carousel',
        slideimg: './slideimg',
        judgeIslogin: './judgeIslogin'
    },
    shim: {

    }
})

require(['jquery', 'index', 'slideimg', 'judgeIslogin'], function ($, index, slideimg, judgeIslogin) {
    index.getItems() //商品渲染
    slideimg.slideimg(); //轮播图
    judgeIslogin.judge(); //验证是否登录
})