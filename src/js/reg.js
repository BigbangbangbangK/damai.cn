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
        }
    }
})