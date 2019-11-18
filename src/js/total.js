define([], function () {
    return {
        total: function () {
            let price = parseInt($('.ticketacitve').text());
            let num = $('#num').val();
            $('.total>span>span').text((price * num).toFixed(2))
        }
    };
})