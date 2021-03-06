require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        shopcar: './shopcar',
        cookie: './cookie',
        judgeIslogin: './judgeIslogin',
        search: './search'

    },
    shim: {

    }
})

require(['jquery', 'shopcar', 'judgeIslogin', 'search'], function ($, shopcar, judgeIslogin, search) {
    shopcar.getItem();
    shopcar.delItem();
    judgeIslogin.judge(); //验证是否登录
    search.searchItem(); //搜索跳转

})