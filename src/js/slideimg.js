define(['jquery', 'carousel'], function ($, carousel) {
    return {
        slideimg: function () {
            $(function () {
                $('#carousel3').carousel({
                    el: {
                        imgsContainer: '.carousel', // 图片容器
                        prevBtn: '.carousel-prev', // 上翻按钮
                        nextBtn: '.carousel-next', // 下翻按钮
                        indexContainer: '.carousel-index', // 下标容器
                    },
                    conf: {
                        auto: false, //是否自动播放 true/false 默认:true
                        needIndexNum: false, //是否需要下标数字 true/false 默认:true
                    }
                });

                /*以下代码按照需要添加/修改*/
                $(".carousel-prev").hover(function () {
                    $(this).find("img").attr("src", "../img/slide/icons/left_btn2.png");
                }, function () {
                    $(this).find("img").attr("src", "../img/slide/icons/left_btn1.png");
                });
                $(".carousel-next").hover(function () {
                    $(this).find("img").attr("src", "../img/slide/icons/right_btn2.png");
                }, function () {
                    $(this).find("img").attr("src", "../img/slide/icons/right_btn1.png");
                });

                $("#carousel3").find('.carousel-prev,.carousel-next,.carousel-index').hide();
                $("#carousel3").hover(function () {
                    $(this).find(".carousel-prev,.carousel-next,.carousel-index").stop().fadeIn(300);
                }, function () {
                    $(this).find(".carousel-prev,.carousel-next,.carousel-index").stop().fadeOut(300);
                });
            });
        }
    }
});