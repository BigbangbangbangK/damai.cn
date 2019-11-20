define(['jquery', 'md5', 'cookie'], function ($, md5, cookie) {
    return {
        loginEv: function (select) {
            // console.log('login');
            $(select).on('click', function () {
                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/www/1910/damai.cn/interface/php/login.php",
                    data: {
                        phone: $('#loginphone').val(),
                        password: $.md5($('#loginpassword').val())
                    },
                    dataType: "json",
                    success: function (response) {
                        if (response.msg == '登陆成功') {
                            cookie.set('isLogin', $('#loginphone').val(), 5);
                            location.href = "http://localhost:8080/www/1910/damai.cn/src/html/index1.html";
                        } else {
                            $('.prompt').addClass('red').html(response.msg)
                        }
                    }
                });
            })

        },
        tabs: function (obj) {
            $('.tab>li').on('click', function () {
                let index = $('.tab>li').index(this);
                $(this).addClass('active').siblings().removeClass('active');
                $('#reg>div').eq(index).addClass('show').siblings().removeClass('show');
            })
        },
        clear: function () {
            $('#loginphone').on('click', function () {
                $('.prompt').removeClass('red')
            })
            $('#loginpassword').on('click', function () {
                $('.prompt').removeClass('red')
            })
        }
    }
})