define(['jquery', 'md5'], function ($, md5) {
    return {
        register: function (select) {
            $(select).on('click', function () {
                console.log('reg');
                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/www/1910/damai.cn/interface/php/reg.php",
                    data: {
                        phone: $('#phone').val(),
                        password: $('#password').val(),
                    },
                    dataType: "json",
                    success: function (response) {
                        console.log(response);
                    }
                });
            })
        },
        // 手机号码验证
        verify: function () {
            function fho(callback, wait) {
                let timer = null;
                return function () {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(function () {
                        callback.apply(this, arguments)
                    }.bind(this), wait)
                }
            }
            $('#reg').on('')
        }
    }
})