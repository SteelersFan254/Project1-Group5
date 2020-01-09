var artist = prompt("asdfas")
var buttonClick = $("#reset");
var makeDiv = $("<div>");
var makeAristName = $("<AristName>");
var makeBio = $("<p>")
var makeTags = $("<h1>")
var cardEl = $("#card")
var primaryEl = $("#primary")
var makeBioLine = $("<h1>")
var makeYearPublishedLine = $("<h1>")
var makeYearPublished = $("<p>")
var makeBtn = $("<button>")
var btnClick = $("#artistBtn")
var makeBigDiv = $("#row")


// function searchArtist (){
//   var artist = document.getElementById("searchInput").value;
//   console.log(artist);
//   return artist

// }
//This function puts the artist info on the page; 3rd tier call
btnClick.click(function () {
  var getArtistInfo = function (data) {
    makeAristName.text(JSON.parse(JSON.stringify(data.artist.name)));
    primaryEl.append(makeAristName);
    makeTags.text("TOP TAGS");
    makeBioLine.text("Short Bio")
    makeBio.text(JSON.parse(JSON.stringify(data.artist.bio.summary)));
    makeYearPublishedLine.text("Year Published");
    makeYearPublished.text(JSON.parse(JSON.stringify(data.artist.bio.published)));
    primaryEl.append(makeTags);
    for (i = 0; i < 5; i++) {
      var makeTag = $("<p>")
      var makeTagBox = $("<div>")
      makeTag.text(JSON.parse(JSON.stringify(data.artist.tags.tag[i].name)));
      primaryEl.append(makeTagBox);
      makeTagBox.attr("style", "background-color:green")
      makeTagBox.append(makeTag);
    }
    cardEl.append(makeBioLine);
    cardEl.append(makeBio);
    primaryEl.append(makeYearPublishedLine);
    primaryEl.append(makeYearPublished);
    makeBtn.text("Click for Top Albums")
    makeBtn.attr("id", "albumBtn")
    primaryEl.append(makeBtn);

  }
  function searchLastFM(artist) {
    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&format=json"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      getArtistInfo(response);
      console.log(response)
    });
  };
  searchLastFM(artist);
});

btnClick.click(function (event) {
  event.preventDefault()
  console.log("button is working")

  var getAlbumInfo = function (albums) {
    for (i = 0; i < 3; i++) {
      let makePic = $("<img>")
      let makeDiv = $("<div>")
      makeBigDiv.append(makeDiv)
      console.log("adds div" + i)
      makePic.attr("src", JSON.parse(JSON.stringify(albums.topalbums.album[i].image[2]["#text"])))
      makeDiv.attr("class", "albumDivs")
      console.log("Creating Div:" + i)
      makeDiv.append(makePic)
      console.log("Creating Pic:" + i)
      var searchLastFM3 = function (artist) {
        var queryURL3 = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&artist=" + artist + "&album=" + albums.topalbums.album[i].name + "&format=json"
        console.log("i is at " + i + "in the searchLastFM function")
        $.ajax({
          url: queryURL3,
          method: "GET"
        }).then(function (response) {
          console.log("i is at " + i + "in the AJAX function")
          for (k = 0; k < response.album.tracks.track.length; k++) {
            console.log(response)
            var makeTrackName = $("<p>")
            makeTrackName.text(JSON.parse(JSON.stringify(response.album.tracks.track[k].name)))
            console.log("song are produced from the " + i + "album");
            console.log(response)
            makeDiv.append(makeTrackName)
          }
        });
        console.log("is at " + i + " after the AJAX function")
      };
      searchLastFM3(artist)
    }
  }
  var searchLastFM2 = function (artist) {
    var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artist + "&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&format=json"

    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function (response) {
      getAlbumInfo(response)
    });
  };
  searchLastFM2(artist)
 });

