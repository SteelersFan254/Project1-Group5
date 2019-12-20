var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm "&api-key=EDG5iAEjuubmjv1ZmgJXjzGLQY0MLP8e"

$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function(response) {


    })