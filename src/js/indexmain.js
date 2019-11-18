requirejs.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        index: "./index",
        carousel: './slidejs/carousel',
        slideimg: './slideimg'
    },
    shim: {

    }
})

require(['jquery', 'index', 'slideimg'], function ($, index, slideimg) {
    index.getItems() //商品渲染
    slideimg.slideimg(); //轮播图
})