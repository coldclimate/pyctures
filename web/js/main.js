require(["jquery", "lodash/lodash", "bootstrap"], function($, _) {

    var strImgSourceRoot = "images/source/",
        strImgThumbRoot = "images/source/";
    $(function() {

        _fnDisplayPictures = function(objPictures) {
            _.each(objPictures, function(objPicture) {
                $('<img />').attr({
                    src: strImgThumbRoot+objPicture.thumbnail
                }).appendTo($('<a />').attr({
                    href: strImgSourceRoot+objPicture.filename
                }).appendTo($('#pictures')));
            });

        };

        $.ajax("data.json").done(function(data) {
            _fnDisplayPictures(data);
        }).fail(function() {
            alert("Could not get data.json object");
        });
        //.always(function() { alert("complete"); });
    });
});