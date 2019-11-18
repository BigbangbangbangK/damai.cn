let baseUrl = 'http://localhost:8080/www/1910/damai.cn';
define([
    'jquery',
    'cookie'
], function ($, cookie) {
    return {
        detailitem: function (callback) {
            let id = location.search.split('=')[1];
            $.ajax({
                type: "get",
                url: "http://localhost:8080/www/1910/damai.cn/interface/php/deitem.php",
                data: {
                    id: id,
                },
                dataType: "json",
                success: function (res) {
                    let detailsimg = JSON.parse(res.details)
                    let city = JSON.parse(res.city)
                    let price_num = JSON.parse(res.price_num)
                    let content = JSON.parse(res.content)
                    console.log(JSON.parse(res.content));
                    // console.log(res.content);
                    // console.log(content);
                    let str = `                    <div class="ct1 row">
                        <div class="col-lg-4 ct1img">
                            <img src="${baseUrl}/src/img/${detailsimg.src1}" alt="">
                            <span>总票代</span>
                        </div>
                        <div class="col-lg-8 ct1c ">
                            <h3>${res.title}</h3>
                            <div class="time">时间:<span>${res.time}</span></div>
                            <div class="place">场馆:<span>${res.address}</span></div>
                            <div class="city">城市<span class="cityactive">${city.c1}</span></div>
                            <div class="prompt"><i class="glyphicon glyphicon-info-sign"></i> 场次时间均为演出当地时间</div>
                            <div class="session">场次<span>${res.time}</span></div>
                            <div class="ticket clearfix">票档
                                <ul>
                                    <li>${price_num[0].price}元</li>
                                    <li>${price_num[1].price}元</li>
                                    <li>${price_num[2].price}元</li>
                                    <li>${price_num[3].price}元</li>
                                    <li class="ticketacitve">${price_num[4].price}元</li>
                                </ul>
                            </div>
                            <div class="num">数量
                                <div class="numbox">
                                    <span class="minus min">-</span>
                                    <input type="text" name="num" id="num" min="1" max="6" value="1"  readonly="true">
                                    <span class="add">+</span>
                                </div>
                            </div>
                            <div class="total">
                                合计 <span><b>￥</b><span>1280.00</span></span>
                            </div>
                            <button id="buy">立即购买</button>
                        </div>
                    </div>
                    <div class="ct2 row">
                        <span class="ct2active">项目详情
                            <b class="ct2flag bshow"></b>
                        </span>
                        <span>购票须知
                            <b class="ct2flag"></b>
                        </span>
                        <span>观演须知
                            <b class="ct2flag"></b>
                        </span>
                    </div>
                    <div class="ct3 row">
                        <div id="detail" class="list">
                            <div class="title">演出介绍
                            </div>
                            <div class="words">
                                <p>
                                    <h3>购票须知</h3>
                                    <p>1、避免影响抢票体验，请您升级到大麦App最新版本购票；</p>
                                    <p>2、请您提前在大麦App后台添加完整个人的购票信息，包括身份证、电话、地址，以方便购票；</p>
                                    <p>3、本项目支持天猫大麦网官方旗舰店购买，请通过无线端下单，PC端暂不支持；</p>
                                    <p>4、因项目火爆，不支持合并配送，不支持不同订单号连座安排，敬请谅解；</p>
                                    <p>5、本项目一单一证，每个身份证单次限购6张。</p>
                                    <p></p>
                                    <h3>演出介绍</h3>
                                    <p><img width="600" height="369" src="${baseUrl}/src/img/${detailsimg.src2}">
                                    </p>
                                    <p>${content.t1}
                                    </p>
                                    <p><img width="600" height="337" src="${baseUrl}/src/img/${detailsimg.src3}">
                                    </p>
                                    <p>${content.t2}
                                    </p>
                                    <p><img width="600" height="384" src="${baseUrl}/src/img/${detailsimg.src4}">
                                    </p>
                                    <p>${content.t3}</p>
                                </p>
                            </div>
                        </div>

                    </div>`;

                    $('.content_left').append(str);
                    callback && callback(id);
                    // , $('#num').val(), $('.total>span>span').text()




                }
            });
        },
        buyurl: function () {
            $('.content_left').on('click', '#buy', function () {
                location.href = `${baseUrl}/src/html/shopcar.html`
            })
        },
        num: {
            add: function (callback) {
                $('.content_left').on('click', '.add', function () {

                    if ($(this).prev().val() == 6) {
                        $(this).addClass('min');
                    } else {
                        $(this).removeClass('min').prev().prev().removeClass('min');
                        $(this).prev().val(Number($(this).prev().val()) + 1)
                    }
                    callback && callback();
                })
            },
            minus: function (callback) {
                $('.content_left').on('click', '.minus', function () {
                    if ($(this).next().val() == 1) {
                        $(this).addClass('min')
                    } else {
                        $(this).removeClass('min').next().next().removeClass('min');
                        $(this).next().val(Number($(this).next().val()) - 1)
                    };
                    callback && callback();
                })
            },
            num: function () {}
        },
        price: function (callback) {
            $('.content_left').on('click', '.ticket>ul>li', function () {
                $(this).addClass('ticketacitve').siblings().removeClass('ticketacitve');
                $('.minus').addClass('min');
                $('.add').removeClass('min');
                $('#num').val(1);

                callback && callback()
            });
        },
        addcookie: function (id, num, total) {
            console.log(id, num, total);
        }
    }
});