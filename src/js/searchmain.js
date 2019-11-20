require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        cookie: './cookie',
        judgeIslogin: './judgeIslogin',
        search: './search'

    },
    shim: {

    }
})

require(['jquery', 'judgeIslogin', 'search'], function ($, judgeIslogin, search) {
    judgeIslogin.judge(); //验证是否登录
    search.searchItem(function () {
        search.getAjax()
    });
})