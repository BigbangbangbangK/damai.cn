define([
    'jquery',
    'cookie'
], function (jquery, cookie) {
    'use strict';
    return {
        judge: function () {
            if (cookie.get('isLogin')) {
                $('#login').html(`<b class="geren">${cookie.get('isLogin')}</b>`)
                $('#login').hover(function () {
                    $('.userlist').addClass('show')
                }, function () {
                    $('.userlist').removeClass('show')
                })
                $('.userlist').hover(function () {
                    $('.userlist').addClass('show')
                }, function () {
                    $('.userlist').removeClass('show')
                })
            }

            // 退出清除user-coockie 
            $('#userout').on('click', function () {
                cookie.remove('isLogin');
                location.reload();
            })

            // 个人信息
            $('#userown').on('click', function () {
                location.href = 'http://localhost:8080/www/1910/damai.cn/src/html/personal.html';
            })

        }
    }
});