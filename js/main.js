$(function() {
    $(".button-collapse").sideNav();


    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
            tags: "snowboarding",
            tagmode: "any",
            format: "json"
        })
        .done(function(data) {
            $('.progress').hide();
            $.each(data.items, function(i, item) {
                var elt = $('.s3:first').clone().removeClass('hide');
                elt.find('img').attr("src", item.media.m).parents('.s3').appendTo(".s12 .row");
                if (i === 24) {
                    return false;
                }
            });
        });

});