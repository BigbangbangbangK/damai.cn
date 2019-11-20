define([
    'jquery',
], function ($) {
    'use strict';
    return {
        passwordstrong: function (pass, prompt) {
            // var pass = document.getElementById('pass');
            // var prompt = document.querySelector('span');
            let reg = [/^.{6,16}$/,
                /[A-Z]+/,
                /[a-z]+/,
                /\d+/,
                /\W+/
            ]
            pass.on('keyup', function () {

                //map()遍历并测出符合正则的选项
                var res = reg.map(function (value) {
                    return value.test(pass.val())
                })

                //统计符合条件的数量
                var strong = res.reduce(function (current, next) {
                    if (next) {
                        current.count++;
                    }
                    return current
                }, {
                    count: 0
                })
                switch (strong.count) {
                    case 1:
                        if (res[0]) prompt.html('短').css('color', 'red').attr('data-flag', false);
                        break;
                    case 2:
                        if (res[0]) prompt.html('短').css('color', 'red').attr('data-flag', false);
                        break;
                    case 3:
                        if (res[0]) prompt.html('弱').css('color', 'orange').attr('data-flag', true);
                        break;
                    case 4:
                        if (res[0]) prompt.html('中').css('color', 'orange').attr('data-flag', true);
                        break;
                    case 5:
                        if (res[0]) prompt.html('强').css('color', 'green').attr('data-flag', true);
                        break;
                }

            })

        }
    }
});