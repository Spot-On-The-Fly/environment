function user(name, genres, artists, songs){
  this.user = name;
  this.genres = genres;
  this.artists = artists;
  this.songs = songs;
}

var michael = new user(

  "michael the dickhead",
  "edm",
  "shit",
  "oh no plz"
);
console.log(michael);
