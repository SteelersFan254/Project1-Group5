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
    makeH2.text(JSON.parse(JSON.stringify(data.artist.name)));
    makeDiv.append(makeH2);
    makeTags.text(" TOP TAGS");
    makeBioLine.text("Short Bio")
    makeP.text(JSON.parse(JSON.stringify(data.artist.bio.summary)));
    makeYearPublishedLine.text("Year Published");
    makeYearPublished.text(JSON.parse(JSON.stringify(data.artist.bio.published)));
    makeDiv.append(makeTags);
    for (i=0; i < 5; i++) {
      var makeTag = $("<p>")
    makeTag.text(JSON.parse(JSON.stringify(data.artist.tags.tag[i].name)));
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
    //clean up fonts and sizing *sdfasdfgit*CSS**
    //make it fit on page or make page scrollable
  
  });
};

var getAlbumInfo = function (albums) {
  var btnClick = $("#Btn")
  var makeDiv = $("<div>")

  btnClick.click(function () {
    console.log(albums);
    containerEl.append(makeDiv);
      var makePic = $("<img>")
      makePic.attr("src", JSON.parse(JSON.stringify(albums.topalbums.album[i].image[3]["#text"])))
      //how do i call this array with #text at the end
      makeDiv.append(makePic)
      
  });

};
var searchLastFM = function (artist) {
  var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&format=json"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    getArtistInfo(response);
    //Calling the function inside of this function; 2nd tier call
    console.log(response)
  });

};
var searchLastFM2 = function (artist) {
  var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artist + "&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&format=json"

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {
    getAlbumInfo(response);
  });

};
searchLastFM(artist);
//calling the Ajax function; 1st tier call
searchLastFM2(artist)
