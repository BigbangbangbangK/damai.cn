baseUrl = 'http://localhost:8080/www/1910/damai.cn';
define([
    'jquery',
], function ($) {
    'use strict';
    return {
        searchItem: function (callback) {
            callback && callback()
            //防抖
            function fho(callback, wait) {
                let timer = null;
                return function () {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(function () {
                        callback.apply(this, arguments)
                    }.bind(this), wait)
                }
            }
            $('.btn-search').on('click', function () {
                this.href = `${baseUrl}/src/html/search.html?${ $('.search').val()}`;
            })
            $('.search').on('keyup', fho(function () {
                $('.searchcontent').empty()
                callback && callback()
            }, 500))

        },
        getAjax: function () {
            let keyword = decodeURIComponent(location.search.slice(1));
            let str = '';
            $.ajax({
                type: "post",
                url: "http://localhost:8080/www/1910/damai.cn/interface/php/searchItem.php",
                data: {
                    value: $('.search').val() || keyword
                },
                dataType: "json",
                success: function (res) {
                    res.forEach((elm, i) => {
                        let pic = JSON.parse(elm.details)
                        let price = JSON.parse(elm.price_num)
                        str += `
                                <div class="content box${i}  clearfix">
                                    <a href="${baseUrl}/src/html/deitem.html?id=${elm.id}">
                                        <img src="${baseUrl}/src/img/${pic.src1}" alt="">
                                        <div class="item item1">
                                            <h4>${elm.title}</h4>
                                            <p><span class="glyphicon glyphicon-map-marker"></span>${elm.address}</p>
                                            <p><span class="glyphicon glyphicon-calendar"></span>${elm.time}</p>
                                            <div class="pricebox"><span
                                                    class="price"><b>${price[0].price}-${price[4].price}</b>&nbsp;&nbsp;元</span><span>售票中</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>`;
                    })
                    $('.searchcontent').append(str);
                }
            });
        }
    }
});