// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global $*/
$(document).ready(function() {
    var giphyUrl = "https://api.giphy.com/v1/stickers/search?q=";
    var apiKey = "&api_key=dc6zaTOxFJmzC";

    function giphyURLWithSearchTerm(searchTerm) {
        // write a function that will return a url for the giphy API with
        // the searchTerm provided in the parameters
        var newUrl = giphyUrl + searchTerm + apiKey;
        return newUrl;
    }

    function appendImageToBody(srcURL) {
        // write a function that will append an <img> to the body with the
        // URL provided in the parameters
        $("body").append("<img src=" + srcURL + ">");
    }


    function callGiphyAPIWithSearchTerm(searchTerm) {
        // write a function that uses the above two functions to create the url,
        // uses ajax to send a request, and appends the result to the body
        $.ajax({
            url: giphyURLWithSearchTerm(searchTerm),
            method: "GET",
            success: function(result) {
                var array = result.data;
                var random = Math.floor((Math.random() * array.length));
                var multiplegiphy = array[random].images.original.url;
                appendImageToBody(multiplegiphy);
            },
        });
    }

    // Add a click handler below to call callGiphyAPIWithSearchTerm when the
    // button is clicked with the value in the text box
    $("button").click(function() {
        $("h3").hide();
        var input = $("#srch-term").val();
        callGiphyAPIWithSearchTerm(input);
    });



});

