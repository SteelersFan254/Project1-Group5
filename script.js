
var searchInput = $("#searchTerm");
var recordsAmountInput = $("#numberOfRecords");
var startYearInput = $("#startYear");
var endYearInput = $("#endYear");
var searchBtn = $("#search");
var clearResultsBtn = $("#clearResults");
var results = $("#resultsList");


// searchBtn.on("click", function () {
// });
var title = prompt("what Artist would you want to know more about?");
var redirectHelper = "https://cors-ut-bootcamp.herokuapp.com/"; 
var queryURL = "https://api.deezer.com/version/service/id/method/?parameters/search/artist/?q=eminem&index=0&limit=2&output=xml";
var queryURL2= redirectHelper + "api.deezer.com/artist/27";


$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
