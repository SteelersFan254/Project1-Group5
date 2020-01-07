var artist = prompt("artist?")
var buttonClick = $("#reset");
var makeDiv = $("<div>");
var makeH2 = $("<h2>");
var makeP = $("<p>")
var makeTags = $("<h1>")
var containerEl = $("#container");
var makeBioLine = $("<h1>")
var makeYearPublishedLine = $("<h1>")
var makeYearPublished = $("<p>")
var makeBtn =$("<button>")

var getArtistInfo = function(data) {
  //This function puts the artist info on the page; 3rd tier call
  buttonClick.click(function () {
    console.log(data);
    makeH2.text(JSON.stringify(data.artist.name));
    makeDiv.append(makeH2);
    makeTags.text(" TOP TAGS");
    makeBioLine.text("Short Bio")
    makeP.text(JSON.stringify(data.artist.bio.summary));
    makeYearPublishedLine.text("Year Published");
    makeYearPublished.text(JSON.stringify(data.artist.bio.published));
    makeDiv.append(makeTags);
    for (i=0; i < 5; i++) {
      var makeTag = $("<p>")
    makeTag.text(JSON.stringify(data.artist.tags.tag[i].name));
    makeDiv.append(makeTag);
    }
    //needs a square around each tag and all on one line **CSS**
    makeDiv.append(makeBioLine);
    makeDiv.append(makeP);
    makeDiv.append(makeYearPublishedLine);
    makeDiv.append(makeYearPublished);
    makeBtn.text("Click for Top Albums")
    makeBtn.attr("id", "albumBtn")
    makeDiv.append(makeBtn);

    
    containerEl.append(makeDiv);
    //find a way to get rid of the href after bio
    //find a way to get rid of quotes
    //clean up fonts and sizing **CSS**
    //make it fit on page or make page scrollable
  
  });
};

// searchBtn.on("click", function () {
// });
var title = prompt("what Artist would you want to know more about?");
var redirectHelper = "https://cors-ut-bootcamp.herokuapp.com/"; 
var queryURL2= redirectHelper + "api.deezer.com/artist/27";


