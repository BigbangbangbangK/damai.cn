define(['jquery', 'md5'], function ($, md5) {
    return {
        loginEv: function (select) {
            console.log('login');
            $(select).on('click', function () {
                $.ajax({
                    type: "post",
                    url: "http://localhost:8080/www/1910/damai.cn/interface/php/login.php",
                    data: {
                        phone: $('#loginphone').val(),
                        password: $('#loginpassword').val()
                    },
                    dataType: "json",
                    success: function (response) {
                        console.log(response);
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
        }
    }
})