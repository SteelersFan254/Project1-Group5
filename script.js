
var searchInput = $("#searchTerm");
var recordsAmountInput = $("#numberOfRecords");
var startYearInput = $("#startYear");
var endYearInput = $("#endYear");
var searchBtn = $("#search");
var getResultsBtn = $("#getResults");

searchBtn.on("click", function() {
 console.log("hello");
});

getResultsBtn.on("click", function() {
    console.log("goodbye");

});


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=EDG5iAEjuubmjv1ZmgJXjzGLQY0MLP8e"

searchBtn.on("click",function() {


$.ajax({
    url: queryURL,
    method: "GET"
})
  .then(function(response) {
    console.log(response)

    var title = response

  });
});