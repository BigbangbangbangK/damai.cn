require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        shopcar: './shopcar',
        cookie: './cookie',
        judgeIslogin: './judgeIslogin'

    },
    shim: {

    }
})

require(['jquery', 'shopcar', 'judgeIslogin'], function ($, shopcar, judgeIslogin) {
    shopcar.getItem();
    shopcar.delItem();
    judgeIslogin.judge(); //验证是否登录
})