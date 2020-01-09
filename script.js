var artist = prompt("artist?")
var buttonClick = $("#artistBtn");
var makeDiv = $("<div>");
var makeName = $("<p>");
var makeBio = $("<p>")
var makeTags = $("<p>")
var containerEl = $("#container");
var makeBioLine = $("<h1>")
var makeYearPublishedLine = $("<p>")
var makeYearPublished = $("<p>")
var makeBtn = $("<button>")
var primaryEl = $("#primary")
var cardEl = $("#card")



buttonClick.click(function () {
  console.log(artist);
  var getArtistInfo = function (data) {
    makeName.text(JSON.parse(JSON.stringify(data.artist.name)));
    primaryEl.append(makeName);
    makeTags.text(" TOP TAGS");
    makeBioLine.text("Short Bio")
    makeBio.text(JSON.parse(JSON.stringify(data.artist.bio.summary)));
    makeYearPublishedLine.text("Year Published");
    makeYearPublished.text(JSON.parse(JSON.stringify(data.artist.bio.published)));
    primaryEl.append(makeTags);
    for (i = 0; i < 5; i++) {
      var makeTag = $("<p>")
      makeTag.text(JSON.parse(JSON.stringify(data.artist.tags.tag[i].name)));
      primaryEl.append(makeTag);
    }
    //needs a square around each tag and all on one line **CSS**
    cardEl.append(makeBioLine);
    cardEl.append(makeBio);
    primaryEl.append(makeYearPublishedLine);
    primaryEl.append(makeYearPublished);
    makeBtn.text("Click for Top Albums")
    makeBtn.attr("id", "albumBtn")
    primaryEl.append(makeBtn);


    containerEl.append(makeDiv);
    //find a way to get rid of the href after bio
    //find a way to get rid of quotes
    //clean up fonts and sizing **CSS**
    //make it fit on page or make page scrollable
  }
  function searchLastFM(artist) {
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
  searchLastFM(artist)
});


// takes an artist
// looks up their list of albums
// adds that list of albums with their songs to the page

var getAlbumInfo = function (albums) {
  var btnClick = $("#artistBtn")

  var makeBigDiv = $("#albumContainer")
  console.log("hello again")
  buttonClick.click(function () {
    console.log("hello one more time")
    containerEl.append(makeBigDiv);
    var makePic = $("<img>")
    for (i = 0; i < 3; i++) {
      let makePic = $("<img>")
      let makeDiv = $("<div>")
      makeBigDiv.append(makeDiv)
      makePic.attr("src", JSON.parse(JSON.stringify(albums.topalbums.album[i].image[1]["#text"])))
      makeDiv.append(makePic)
      function searchLastFM3(artist) {

        var queryURL3 = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&artist=" + artist + "&album=" + albums.topalbums.album[i].name + "&format=json"

        $.ajax({
          url: queryURL3,
          method: "GET"
        }).then(function (response) {
          console.log(response)
          for (k = 0; k < response.album.tracks.track.length; k++) {

            var makeTrackName = $("<p>")
            makeTrackName.text(JSON.parse(JSON.stringify(response.album.tracks.track[k].name)))

            makeDiv.append(makeTrackName)
          }
        });
      };
      searchLastFM3(artist)
    }
  });
  ///add pic1 to div1
  ///add tracks to div1
  ///add div 1 to bigdiv



};

function searchLastFM2(artist) {
  var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artist + "&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&format=json"
  console.log("hello")
  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {
    getAlbumInfo(response);
    console.log(response)
  });
};
var searchLastFM3 = function (artist) {
  var queryURL3 = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&artist=" + artist + "&album=Indicud&format=json"

  $.ajax({
    url: queryURL3,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });

};
//calling the Ajax function; 1st tier call
searchLastFM2(artist);

