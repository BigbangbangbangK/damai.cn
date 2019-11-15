requirejs.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        index: "./index"
    },
    shim: {

    }
})

require(['jquery', 'index'], function ($, index) {
    index.getItems()
})