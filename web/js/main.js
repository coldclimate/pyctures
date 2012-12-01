require(["jquery", "lodash/lodash", "bootstrap"], function($, _) {
    
    var strImgSourceRoot="images/source/",
        strImgThumbRoot="images/thumbs/";
    $(function() {

        _fnDisplayPictures = function(objPictures) {
            _.each(objPictures, function(objPicture) {
                var img = $('<img>');
                img.attr('src', strImgSourceRoot+objPicture.filename);
                img.appendTo('#pictures');
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