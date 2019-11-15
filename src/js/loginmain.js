require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        md5: './jquery.md5',
        reg: './reg',
        login: './login',
    },
    shim: {
        md5: ['jquery']
    }
});

require(['jquery', 'reg'], function ($, reg) {
    reg.register('#regbtn')
})





require(['jquery', 'login'], function ($, login) {
    login.loginEv('#loginbtn');
    login.tabs()
})