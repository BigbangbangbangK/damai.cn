require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        deitem: './deitem',
        total: './total',
        cookie: './cookie',
        judgeIslogin: './judgeIslogin'
    }
})

require(['jquery', 'deitem', 'total', 'judgeIslogin'], function ($, deitem, total, judgeIslogin) {
    deitem.detailitem(function (id) {
        $('#buy').on('click', function () {
            deitem.addcookie(id, $('#num').val(), parseInt($('.ticketacitve').text()))
            location.href = `${baseUrl}/src/html/shopcar.html`;
        })
    }); //详情页渲染
    // deitem.buyurl(); //购买按钮跳转页面
    deitem.num.add(function () {
        total.total()
    }); //加判断
    deitem.num.minus(function () {
        total.total()
    }); //减判断
    deitem.price(function () {
        total.total()
    }); //票价
    judgeIslogin.judge(); //验证是否登录
})