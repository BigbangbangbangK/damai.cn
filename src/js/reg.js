define(['jquery', 'md5', 'cookie', 'passwordstrong'], function ($, md5, cookie, passwordstrong) {
    return {
        register: function (select) {
            $.ajax({
                type: "post",
                url: "http://localhost:8080/www/1910/damai.cn/interface/php/reg.php",
                data: {
                    phone: $('#phone').val(),
                    password: $.md5($('#password').val()),
                },
                dataType: "json",
                success: function (response) {
                    if (response.msg == '注册成功') {
                        cookie.set('isLogin', $('#phone').val(), 5);
                        location.href = "http://localhost:8080/www/1910/damai.cn/src/html/index1.html";
                    }
                }
            })
        },
        phone: function () {
            $.ajax({
                type: "post",
                url: "http://localhost:8080/www/1910/damai.cn/interface/php/phone.php",
                data: {
                    phone: $('#phone').val()
                },
                dataType: "json",
                success: function (res) {
                    // console.log(res.msg);
                    // console.log($('#phone'));

                    if (res.msg == '已注册') {
                        $('.isTrue').html(res.msg).css({
                            'color': 'red',
                            'display': 'block'
                        })
                        $('.phonecon').css('display', 'none')
                    } else {
                        $('.isTrue').css('display', 'none')
                        $('.phonecon').css('display', 'block')
                    }
                }
            });
        },
        // 注册验证
        verify: function (register, phone) {
            let reg = {
                phone: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
                pass: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
            }
            //函数防抖
            // function fho(callback, wait) {
            //     let timer = null;
            //     return function () {
            //         if (timer) clearTimeout(timer);
            //         timer = setTimeout(function () {
            //             callback.apply(this, arguments)
            //         }.bind(this), wait)
            //     }
            // }
            // console.log(phone());
            $('#reg input').on('keyup', function () {
                switch ($(this)[0].id) {
                    case 'phone':
                        if (reg.phone.test($(this).val())) {
                            $(this).prevAll().find('.phonecon').css({
                                'display': 'block',
                                'color': 'green',
                                'font-size': '26px',
                                'top': '7px'
                            }).html('').addClass('glyphicon glyphicon-ok-sign').attr('data-flag', true)
                        } else {
                            $(this).prevAll().find('.phonecon').css({
                                'display': 'block',
                                'color': 'red'
                            }).removeClass('glyphicon glyphicon-ok-sign').attr('data-flag', false)
                        }
                        phone && phone();
                        break;
                    case 'password':
                        if ($(this).val().length < 6) $('.passstr').html('').attr('data-flag', false)
                        passwordstrong.passwordstrong($(this), $(this).prevAll().find('.passstr'))
                        $(this).prevAll().find('.passcon').css({
                            'display': 'block'
                        })
                        break;
                    case 'agpassword':
                        if ($(this).val() == $('#password').val()) {
                            $(this).prevAll().find('.agacon').css({
                                'display': 'block',
                                'color': 'green',
                                'font-size': '26px',
                                'top': '7px'
                            }).html('').addClass('glyphicon glyphicon-ok-sign').attr('data-flag', true)
                        } else {
                            $(this).prevAll().find('.agacon').css({
                                'display': 'block',
                                'color': 'red'
                            }).attr('data-flag', false)
                        }
                        break;
                }
                count()
            })
            $('#reg').on('mouseup', function () {
                if ($('#verify_xbox').width() == 300) {
                    $('#verify_box').attr('data-flag', true);
                } else {
                    $('#verify_box').attr('data-flag', false);
                }
                count()
            })

            function count() {
                let length = $('span[data-flag="true"]').length + $('b[data-flag="true"]').length + $('div[data-flag="true"]').length;
                $('#regbtn').on('click', function () {
                    if ($('#checked')[0].checked) {
                        if (length == 4) {
                            // console.log(true);
                            register && register();
                        }
                    }
                })
            }
        }
    }
})