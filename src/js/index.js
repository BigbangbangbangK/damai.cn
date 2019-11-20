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
                    // console.log(res);
                    let bleft = '',
                        bright = '',
                        opera1 = '',
                        opera2 = '',
                        sports1 = '',
                        sports2 = '',
                        child1 = '',
                        child2 = '';
                    res.forEach((elm, i) => {
                        let details = JSON.parse(elm.details)
                        let price = JSON.parse(elm.price_num)[0].price
                        if (elm.type == '演唱会') {
                            if (i == 0) {
                                bleft = ` 
                                <div class = "col-lg-3 bleft" >
                                    <a href = "${baseUrl}/src/html/deitem.html?id=${elm.id}"
                                class = "head_1" >
                                    <img src = "${baseUrl}/src/img/${details.src1}"
                                alt = "" >
                                    <div class = "fcont" >
                                        <div class = "title" >${elm.title}</div>
                                        <div class = "details" >￥${price}<span>起</span>
                                             </div >
                                        </div>
                                    </a>
                                </div>`;
                            } else if (i < 7) {
                                bright += `<div class="box-right">
                                    <a href = "${baseUrl}/src/html/deitem.html?id=${elm.id}"
                                    class = "item_1" >
                                        <div class="itemimg">
                                            <img src = "${baseUrl}/src/img/${details.src1}" alt = "" height="159px">
                                        </div>
                                        <div class="iteminfo">
                                            <div class="title" title="${elm.title}">${elm.title}</div>
                                            <div class="venue">${elm.address}</div>
                                            <div class="showtime">${elm.time}</div>
                                            <div class="showtime"></div>
                                            <div class="price">¥${price}<span>起</span></div>
                                        </div>
                                    </a>
                                </div>
                            `
                            }
                        }
                        if (elm.type == '话剧歌剧') {
                            if (elm.id == 10001) {
                                opera1 = ` 
                                <div class = "col-lg-3 bleft" >
                                    <a href = "${baseUrl}/src/html/deitem.html?id=${elm.id}"
                                class = "head_1" >
                                    <img src = "${baseUrl}/src/img/${details.src1}"
                                alt = "" >
                                    <div class = "fcont" >
                                        <div class = "title" >${elm.title}</div>
                                        <div class = "details" >￥${price}<span>起</span>
                                             </div >
                                        </div>
                                    </a>
                                </div>`;
                            } else if (elm.id <= 10007) {
                                opera2 += `<div class="box-right">
                                    <a href = "${baseUrl}/src/html/deitem.html?id=${elm.id}"
                                    class = "item_1" >
                                        <div class="itemimg">
                                            <img src = "${baseUrl}/src/img/${details.src1}" alt = "" height="159px">
                                        </div>
                                        <div class="iteminfo">
                                            <div class="title" title="${elm.title}">${elm.title}</div>
                                            <div class="venue">${elm.address}</div>
                                            <div class="showtime">${elm.time}</div>
                                            <div class="showtime"></div>
                                            <div class="price">¥${price}<span>起</span></div>
                                        </div>
                                    </a>
                                </div>
                            `
                            }
                        }
                        if (elm.type == '体育比赛') {
                            if (elm.id == 20001) {
                                sports1 = ` 
                                <div class = "col-lg-3 bleft" >
                                    <a href = "${baseUrl}/src/html/deitem.html?id=${elm.id}"
                                class = "head_1" >
                                    <img src = "${baseUrl}/src/img/${details.src1}"
                                alt = "" >
                                    <div class = "fcont" >
                                        <div class = "title" >${elm.title}</div>
                                        <div class = "details" >￥${price}<span>起</span>
                                             </div >
                                        </div>
                                    </a>
                                </div>`;
                            } else if (elm.id <= 20007) {
                                sports2 += `<div class="box-right">
                                    <a href = "${baseUrl}/src/html/deitem.html?id=${elm.id}"
                                    class = "item_1" >
                                        <div class="itemimg">
                                            <img src = "${baseUrl}/src/img/${details.src1}" alt = "" height="159px">
                                        </div>
                                        <div class="iteminfo">
                                            <div class="title" title="${elm.title}">${elm.title}</div>
                                            <div class="venue">${elm.address}</div>
                                            <div class="showtime">${elm.time}</div>
                                            <div class="showtime"></div>
                                            <div class="price">¥${price}<span>起</span></div>
                                        </div>
                                    </a>
                                </div>
                            `
                            }
                        }
                        if (elm.type == '儿童亲子') {
                            if (elm.id == 30001) {
                                child1 = ` 
                                <div class = "col-lg-3 bleft" >
                                    <a href = "${baseUrl}/src/html/deitem.html?id=${elm.id}"
                                class = "head_1" >
                                    <img src = "${baseUrl}/src/img/${details.src1}"
                                alt = "" >
                                    <div class = "fcont" >
                                        <div class = "title" >${elm.title}</div>
                                        <div class = "details" >￥${price}<span>起</span>
                                             </div >
                                        </div>
                                    </a>
                                </div>`;
                            } else if (elm.id <= 30007) {
                                child2 += `<div class="box-right">
                                    <a href = "${baseUrl}/src/html/deitem.html?id=${elm.id}"
                                    class = "item_1" >
                                        <div class="itemimg">
                                            <img src = "${baseUrl}/src/img/${details.src1}" alt = "" height="159px">
                                        </div>
                                        <div class="iteminfo">
                                            <div class="title" title="${elm.title}">${elm.title}</div>
                                            <div class="venue">${elm.address}</div>
                                            <div class="showtime">${elm.time}</div>
                                            <div class="showtime"></div>
                                            <div class="price">¥${price}<span>起</span></div>
                                        </div>
                                    </a>
                                </div>
                            `
                            }
                        }
                    })
                    bright = `<div class="col-lg-9 bright">${bright}</div>`
                    opera2 = `<div class="col-lg-9 bright">${opera2}</div>`
                    sports2 = `<div class="col-lg-9 bright">${sports2}</div>`
                    child2 = `<div class="col-lg-9 bright">${child2}</div>`
                    $('.content_1>.box').append(bleft).append(bright);
                    $('.content_2>.box').append(opera1).append(opera2);
                    $('.content_3>.box').append(sports1).append(sports2);
                    $('.content_4>.box').append(child1).append(child2);
                }
            });
        }










    }
})