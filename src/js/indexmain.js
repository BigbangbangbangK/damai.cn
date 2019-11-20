requirejs.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        index: "./index",
        carousel: './slidejs/carousel',
        slideimg: './slideimg',
        judgeIslogin: './judgeIslogin',
        search: './search'
    },
    shim: {

    }
})

require(['jquery', 'index', 'slideimg', 'judgeIslogin', 'search'], function ($, index, slideimg, judgeIslogin, search) {
    index.getItems(); //商品渲染
    index.searchjump(); //点击搜索跳转到搜索页面
    slideimg.slideimg(); //轮播图
    judgeIslogin.judge(); //验证是否登录
    search.searchItem(); //搜索跳转

})