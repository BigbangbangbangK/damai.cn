let baseUrl = 'http://localhost:8080/www/1910/damai.cn'
define(['jquery'], function ($) {
    return {
        getItems: function () {
            $.ajax({
                type: "get",
                url: baseUrl + "/interface/php/indexget.php",
                // data: "",
                dataType: "json",
                success: function (res) {
                    res.forEach(elm => {
                        console.log(elm);
                    })
                }
            });
        }
    }
})