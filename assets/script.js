// get info from form 1, 2, 3 ,4
// insert form info into api
// return information (article name, area published, time, link)

// all 4 forms are sent to js with a listener and put inside api
console.log("hi")

var formOne = $("#form-one");
var formTwo = $("#form-two");
var formThree = $("#form-three");
var formFour = $("#form-four");
var cardArea = $(".card-text")

$("#submit-button").on("click", function(event){
    event.preventDefault();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + formOne.val() + "&fq=pub_year:(\"" + formThree.val() + "\" \"" + formFour.val() + "\")&api-key=Jq7PfHGXMxZK1k0TLk5fPHXSH0vkbCyk "
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        console.log(queryURL)
        // for (i = 1; i <= formTwo.val(); i++) {
        //     var p = $("<p>");
        //     p.text(response.docs[i].abstract);
        //     cardArea.append(p);
        // }
        
    });

});