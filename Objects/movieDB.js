var movies = [
  {
    title: "In Bruges",
    rating: 4.5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 5,
    hasWatched: false
  },
  {
    title: "F&F 6",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    hasWatched: false
  }
];
// for (var i = 0; i < movie.length; i++) {
movies.forEach(function(movie) {
  var result = "You have ";
  if (movie.hasWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += '"' + movie.title + '" - ';
  result += movie.rating + " stars";
  console.log(result);
});
