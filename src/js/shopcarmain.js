require.config({
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        shopcar: './shopcar',
        cookie: './cookie'
    },
    shim: {

    }
})

require(['jquery', 'shopcar'], function ($, shopcar) {
    shopcar.getItem();
})