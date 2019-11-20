baseUrl = 'http://localhost:8080/www/1910/damai.cn';
define([
    'jquery',
    'cookie'
], function ($, cookie) {
    'use strict';
    return {
        getItem: function () {
            let shop = JSON.parse(cookie.get('shop'));

            if (shop) {
                let id = shop.map(elm => elm.id).join();
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/php/shopcar.php`,
                    data: {
                        id: id
                    },
                    dataType: "json",
                    success: function (res) {
                        // console.log(res);
                        let str = '',
                            allprice = 12;
                        res.forEach((elm, index) => {
                            let details = JSON.parse(elm.details)
                            let arr = shop.filter((val, index) => {
                                return val.id == elm.id
                            })
                            str += ` 
                        <tr>
                            <td>
                                <img src="${baseUrl}/src/img/${details.src1}" alt="" width="62px" height="80px">
                                <div>
                                    <p>${elm.title}</p>
                                    <p class="time">${elm.time}</p>
                                    <p class="address">${elm.address}</p>
                                </div>
                            </td>
                            <td>
                                <span>暂无座位信息</span>
                            </td>
                            <td>
                                <span>${arr[0].price.toFixed(2)}</span>
                            </td>
                            <td>
                                <span>${arr[0].num}</span>
                            </td>
                            <td>
                                <span>-</span>
                            </td>
                            <td>
                                <span class="allprice">${(arr[0].price * arr[0].num).toFixed(2)}</span>
                            </td>
                            <td><i class="glyphicon glyphicon-remove del" date-delid="${arr[0].id}"></i></td>
                        </tr>`;
                            allprice += arr[0].price * arr[0].num;
                        });
                        $('tbody').append(str);
                        $('.truepay_all').html(allprice.toFixed(2));
                    }
                });
            }

        },
        delItem: function () {
            $('tbody').on('click', '.del', function () {
                let arr = JSON.parse(cookie.get('shop'));
                let delid = $(this).attr('date-delid');
                let delarr = arr.filter(elm => elm.id == delid)
                arr.splice(arr.indexOf(delarr[0]), 1);
                cookie.set('shop', JSON.stringify(arr), 1);
                location.reload();
            })
        }
    }

});