require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        md5: './jquery.md5',
        reg: './reg',
        login: './login',
        cookie: './cookie',
        passwordstrong: './passwordstrong'
    },
    shim: {
        md5: ['jquery']
    }
});

// 注册
require(['jquery', 'reg'], function ($, reg) {
    reg.verify(function () {
        reg.register()
    }, function () {
        reg.phone()
    });
})




// 登录
require(['jquery', 'login'], function ($, login) {
    login.loginEv('#loginbtn');
    login.tabs();
    login.clear();
})