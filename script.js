var searchInput = $("#searchTerm");
var recordsAmountInput = $("#numberOfRecords");
var startYearInput = $("#startYear");
var endYearInput = $("#endYear");
var searchBtn = $("#search");
var getResultsBtn = $("#getResults");
var results = $("#resultsList");

searchBtn.on("click", function () {
    for (i = 0; i < recordsAmountInput.val(); i++) {
        console.log("hello");
        var article = $("<div>");
        article.text("heello");
        results.append(article);
    }
});

getResultsBtn.on("click", function () {
    console.log("goodbye");

});