define([
    'jquery',
    'cookie'
], function (jquery, cookie) {
    'use strict';
    return {
        judge: function () {
            if (cookie.get('isLogin')) {
                $('#login').html(`<b class="geren">${cookie.get('isLogin')}</b>`)
                $('#login').on('click', function () {
                    // location.href = "http://localhost:8080/www/1910/damai.cn/src/html/personal.html";
                })
            }

        }
    }
});