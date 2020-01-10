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
var makealbumBtn = $("<button>")
var artistBtn = $("#artistBtn")
var rowEl = $("#row")
var makeTicketBtn = $("<button>")
var makeDivBox = $("<div>")
var makeRelateLine = $("<p>")
var makeRelateDiv = $("<div>")
var modal = document.getElementById("myModal");
var span = document.getElementById("close");

artistBtn.click(function (event) {
  event.preventDefault
  primaryEl.empty();
  cardEl.empty();
  rowEl.attr("style", "visibility:hidden")
  var getArtistInfo = function (data) {
    console.log(data)
    primaryEl.attr("style", "visibility:visible")
    cardEl.attr("style", "visibility:visible")
    makeArtistName.text(JSON.parse(JSON.stringify(data.artist.name)));
    primaryEl.append(makeArtistName);
    makeTags.text("TOP TAGS");
    makeBioLine.attr("class", "bioTitle")
    makeBioLine.text("Short Bio")
    makeP.text(JSON.parse(JSON.stringify(data.artist.bio.summary)));
    makeYearPublishedLine.text("Year Published");
    makeYearPublished.text(JSON.parse(JSON.stringify(data.artist.bio.published)));
    primaryEl.append(makeTags);
    primaryEl.append(makeDivBox)
    for (i = 0; i < 5; i++) {
      var makeTag = $("<p>")
      var makeTagBox = $("<div>")
      makeTag.text(JSON.parse(JSON.stringify(data.artist.tags.tag[i].name)));
      primaryEl.append(makeTagBox);
      makeTag.attr("class", "tagbox")
      makeTagBox.append(makeTag);
      makeDivBox.append(makeTagBox)
    }
    primaryEl.append(makeRelateLine)
    makeRelateLine.text("Related Artist")
    primaryEl.append(makeRelateDiv)

    for (i = 0; i < 5; i++) {
      var makeRelateBox = $("<div>")
      
      var makeRelate = $("<p>")
      makeRelate.text(JSON.parse(JSON.stringify(data.artist.similar.artist[i].name)));
      makeRelateBox.append(makeRelate);
      makeRelateDiv.append(makeRelateBox);
    }
    makeDiv.append(makeBioLine);
    makeDiv.append(makeP);
    makeDiv.append(makeYearPublishedLine);
    makeDiv.append(makeYearPublished);
    makeBtn.text("Click for Top Albums")
    makeBtn.attr("id", "albumBtn")
    makeDiv.append(makeBtn);
    containerEl.append(makeDiv);
  }
  function searchLastFM(artist) {
    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&format=json"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      getArtistInfo(response);
    });
  };
  searchLastFM(artist);
});

$(document).on("click", "#albumBtn", function () {
  event.preventDefault()
  rowEl.empty()
  console.log("button is working")
  var getAlbumInfo = function (albums) {

    for (i = 0; i < 3; i++) {
      let makePic = $("<img>")
      let makeDiv = $("<div>")
      makeBigDiv.append(makeDiv)
      console.log("adds div" + i)
      makePic.attr("src", JSON.parse(JSON.stringify(albums.topalbums.album[i].image[2]["#text"])))
      makeDiv.attr("class", "div" + i)
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
            makeDiv.append(makeTrackName)
          }
        });
        console.log("is at " + i + " after the AJAX function")
      };
      searchLastFM3(artist)
    }

  };
  ///add pic1 to div1
  ///add tracks to div1
  ///add div 1 to bigdiv

});
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

$(document).on("click", "#ticketBtn", function () {
  modal.style.display = "block";
  var modalEl = $("#modal")
  var makeHead = $("<p>")

  makeHead.text("UPCOMING EVENTS")
  modalEl.append(makeHead)
  function searchTicketMaster(artist) {
    var queryURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&apikey=U4cbp5Q06iBqN3D21GrhUyfD2jsn5lAr"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)
      function searchTicketMaster2(artist) {
        //var queryURL = "https://app.ticketmaster.com/discovery/v2/events/" + lala + ".json?apikey=U4cbp5Q06iBqN3D21GrhUyfD2jsn5lAr"
        var queryURL = "https://app.ticketmaster.com/discovery/v2/events?apikey=U4cbp5Q06iBqN3D21GrhUyfD2jsn5lAr&attractionId=" + artist + "&locale=*"
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          console.log(response)
          for (i = 0; i < 3; i++) {
            console.log(i)
            let makeEventDiv = $("<div>")
            let makeEvent = $("<p>")
            let makeDate = $("<p>")
            let makePrice = $("<p>")
            let makeVenue = $("<p>")
            let makeAddress = $("<p>")
            makeEventDiv.attr("class", "div" + i)
            makeEventDiv.attr("style", "border-style: solid; border-color: black; border-width: 5px;")
            modalEl.append(makeEventDiv)
            makeEvent.text(response._embedded.events[i].name)
            makeEventDiv.append(makeEvent)
            makeDate.text("DATE: " + response._embedded.events[i].dates.start.localDate + " " + response._embedded.events[i].dates.start.localTime)
            makeEventDiv.append(makeDate)
            makeVenue.text("VENUE: " + response._embedded.events[i]._embedded.venues[0].name)
            makeEventDiv.append(makeVenue)
            makeAddress.text("ADDRESS: " + response._embedded.events[i]._embedded.venues[0].address.line1 + " " + " " + response._embedded.events[i]._embedded.venues[0].state.stateCode)
            makeEventDiv.append(makeAddress)
            makePrice.text("PRICE RANGE: $" + response._embedded.events[i].priceRanges[0].min + " - $" + response._embedded.events[i].priceRanges[0].max)
            makeEventDiv.append(makePrice)
          }
        });
      };
      searchTicketMaster2(response._embedded.attractions[0].id)

    });
  };
  searchTicketMaster($("#artistName").val())
})

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {
    getAlbumInfo(response);
  });
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
  searchLastFM2($("#artistName").val())



// $(document).on("click", "#ticketBtn", function () {
//   modal.style.display = "block";
//   var modalEl = $("#modal")
//   var makeHead = $("<p>")
  
//   makeHead.text("UPCOMING EVENTS")
//   modalEl.append(makeHead)
//   function searchTicketMaster(artist) {
//     var queryURL = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&apikey=U4cbp5Q06iBqN3D21GrhUyfD2jsn5lAr"
  
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function (response) {
//       console.log(response)
//       function searchTicketMaster2(artist) {
//         //var queryURL = "https://app.ticketmaster.com/discovery/v2/events/" + lala + ".json?apikey=U4cbp5Q06iBqN3D21GrhUyfD2jsn5lAr"
//         var queryURL = "https://app.ticketmaster.com/discovery/v2/events?apikey=U4cbp5Q06iBqN3D21GrhUyfD2jsn5lAr&attractionId=" + artist + "&locale=*"
//         $.ajax({
//           url: queryURL,
//           method: "GET"
//         }).then(function (response) {
//           console.log(response)
//           for (i=0; i < 3; i++) {
//             console.log(i)
//             let makeEventDiv = $("<div>")
//             let makeEvent = $("<p>")
//             let makeDate = $("<p>")
//             let makePrice = $("<p>")
//             let makeVenue = $("<p>")
//             let makeAddress = $("<p>")
//             makeEventDiv.attr("class", "div" + i)
//             makeEventDiv.attr("style", "border-style: solid; border-color: black; border-width: 5px;")
//             modalEl.append(makeEventDiv)
//             makeEvent.text(response._embedded.events[i].name)
//             makeEventDiv.append(makeEvent)
//             makeDate.text("DATE: " + response._embedded.events[i].dates.start.localDate + " " + response._embedded.events[i].dates.start.localTime)
//             makeEventDiv.append(makeDate)
//             makeVenue.text("VENUE: " + response._embedded.events[i]._embedded.venues[0].name)
//             makeEventDiv.append(makeVenue)
//             makeAddress.text("ADDRESS: " + response._embedded.events[i]._embedded.venues[0].address.line1 + " " + " " + response._embedded.events[i]._embedded.venues[0].state.name + response._embedded.events[i]._embedded.venues[0].state.stateCode)
//             makeEventDiv.append(makeAddress)
//             makePrice.text("PRICE RANGE: $" + response._embedded.events[i].priceRanges[0].min + " - $" + response._embedded.events[i].priceRanges[0].max)
//             makeEventDiv.append(makePrice)
//             }
//         });
//       };
//       searchTicketMaster2(response._embedded.attractions[0].id)
  
//     });
//   };
//   searchTicketMaster($("#artistName").val())
// })

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


;
var searchLastFM3 = function (artist) {
  var queryURL3 = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&artist=" + artist + "&album=Indicud&format=json"

  $.ajax({
    url: queryURL3,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });

};
searchLastFM(artist);
//calling the Ajax function; 1st tier call
searchLastFM2(artist);

