require(["jquery", "lodash/lodash", "bootstrap"], function($, _ ) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    console.log("underscore1",_);
    $(function() {
console.log("underscore2",_);
        _fnDisplayPictures = function(objPictures) {
            _.each(objPictures, function(objPicture) {
                var img = $('<img>');
                img.attr('src', objPicture.filename);
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