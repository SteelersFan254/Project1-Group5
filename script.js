
var searchInput = $("#searchTerm");
var recordsAmountInput = $("#numberOfRecords");
var startYearInput = $("#startYear");
var endYearInput = $("#endYear");
var searchBtn = $("#search");
var clearResultsBtn = $("#clearResults");
var results = $("#resultsList");


searchBtn.on("click", function () {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=EDG5iAEjuubmjv1ZmgJXjzGLQY0MLP8e"


    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)
    
            var title = response
            for (i = 0; i < recordsAmountInput.val(); i++) {
                console.log("hello");
                var article = $("<div>");
                article.text(title);
                results.append(article);
            }
        });
        

    
});

clearResultsBtn.on("click", function () {
    console.log("goodbye");

});



