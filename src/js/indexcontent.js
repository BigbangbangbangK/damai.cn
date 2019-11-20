define(['indexmain'], function (indexmain) {
    return {
        content: function (elm, i, details, baseUrl, minindex, maxindex, str1, str2, price) {
            if (i == minindex) {
                str1 = ` 
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
            } else if (i < maxindex) {
                str2 += `<div class="box-right">
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
            return str1, str2;
        },
    }
})