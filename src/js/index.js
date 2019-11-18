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
                        bright = '';

                    res.forEach((elm, i) => {
                        let details = JSON.parse(elm.details)
                        let price = JSON.parse(elm.price_num)[0].price
                        // console.log(elm);
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
                        } else {
                            bright += `<div class="box-right">
                                <a href = "${baseUrl}/src/html/deitem.html?id=${elm.id}"
                                class = "item_1" >
                                    <div class="itemimg">
                                        <img src = "${baseUrl}/src/img/${details.src1}" alt = "" >
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

                    })
                    bright = `<div class="col-lg-9 bright">${bright}</div>`
                    $('.content_1>.box').append(bleft).append(bright);
                }
            });
        }










    }
})