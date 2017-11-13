/*
const moviesList = [
  {
    "id": 2,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Finding Nemo",
    "duration": 120,
    "type": "Kids",
    "image": "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-10cl8hb_256eb04a.jpeg"
  },
  {
    "id": 3,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Cars",
    "duration": 120,
    "type": "Kids",
    "image": "https://vignette.wikia.nocookie.net/disney/images/0/01/Cars.jpg/revision/latest/scale-to-width-down/515?cb=20130418235011"
  },
  {
    "id": 4,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Peppa Pig",
    "duration": 120,
    "type": "Kids",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41A-y5xfnKL.jpg"
  },
  {
    "id": 5,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Cars 2",
    "duration": 120,
    "type": "Kids",
    "image": "https://vignette.wikia.nocookie.net/disney/images/3/3c/Cars2_Poster.jpg/revision/latest/scale-to-width-down/250?cb=20120323041628"
  },
  {
    "id": 6,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Taken",
    "duration": 120,
    "type": "Action",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM5MDU3NTY0M15BMl5BanBnXkFtZTgwOTk2ODU2MzE@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
  },
  {
    "id": 7,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "The wolf of wall street",
    "duration": 120,
    "type": "Action",
    "image": "https://3.bp.blogspot.com/-Zx4fW5fKnc0/UpY4h2JhElI/AAAAAAAAXz8/vA-4OAPwwBQ/s275/el-lobo-de-wall-street.jpg"
  },
  {
    "id": 8,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Terminator",
    "duration": 120,
    "type": "Action",
    "image": "https://pics.filmaffinity.com/the_terminator-778052251-large.jpg"
  },
  {
    "id": 9,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Commando",
    "duration": 120,
    "type": "Action",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWE0ZjFhYjItMzI5MC00MDllLWE4OGMtMzlhNGQzN2RjN2MwXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_UY1200_CR85,0,630,1200_AL_.jpg"
  },
  {
    "id": 10,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Avengers",
    "duration": 120,
    "type": "Action",
    "image": "https://ugc.kn3.net/i/origin/http://blogdesuperheroes.es/imagen-noti/bds_avengers_fan-poster-09.jpg"
  },
  {
    "id": 11,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Anabell",
    "duration": 120,
    "type": "Drama",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    "id": 12,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "The Others",
    "duration": 120,
    "type": "Drama",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAxMDE4Mzc3ODNeQTJeQWpwZ15BbWU4MDY2Mjg4MDcx._V1_UY1200_CR94,0,630,1200_AL_.jpg"
  },
  {
    "id": 13,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Friends",
    "duration": 120,
    "type": "Drama",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4NzEyNzQ5OF5BMl5BanBnXkFtZTYwNTY3NDg4._V1._CR24,0,293,443_UY1200_CR82,0,630,1200_AL_.jpg"
  },
  {
    "id": 14,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Transformers",
    "duration": 120,
    "type": "Drama",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNDM3MzY1Nl5BMl5BanBnXkFtZTcwOTg5NjU1OQ@@._V1_UY268_CR4,0,182,268_AL_.jpg"
  },
  {
    "id": 15,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "year": 2012,
    "staring": "Jeniffer Aniston, Angelina Jolie",
    "director": "Juan José Campanella",
    "url": "http://10.255.255.112:8080/sample_bunny_video.mp4",
    "clasification": "PG12",
    "name": "Alien vs Depredador",
    "duration": 120,
    "type": "Drama",
    "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4MjIwMTcyMl5BMl5BanBnXkFtZTYwMTYwNDA3._V1_UY1200_CR89,0,630,1200_AL_.jpg"
  }
];
module.exports = moviesList;


 fetch('https://us-central1-oracle-developer-tour.cloudfunctions.net/app/movies')
   .then((response) => response.json())
   .then((responseJson) => {
     this.setState({ loading: false, movies: responseJson });
   })
   .catch((error) => {
     this.setState({ loading: false });
     Alert.alert("Error", error);
   });

  fetch(`https://us-central1-oracle-developer-tour.cloudfunctions.net/app/login?user=${this.state.usuario}&pass=${this.state.password}`)
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({ loading: false });
       if(responseJson === 'Usuario autenticado correctamente') {
         this.props.history.push('/home');
       }
       else {
         Alert.alert("Error", responseJson);
       }
     })
     .catch((error) => {
       this.setState({ loading: false });
       Alert.alert("Error", error);
     });
  */
