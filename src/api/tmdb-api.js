// api end point to discover movies
export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
  
export const getMovie = (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };


  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };


  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  // api end point to discover TV shows
  export const getTvShows = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };
  


  // api end point to get actors in a movie
  export const getMovieActors = (args) => {
    const [, idPart] = args.queryKey;
    const  { id } = idPart;
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    .then((response) => {
      if (!response.ok){
        throw new Error(response.json().message);
      }
      return response.json(); /*return should be in this same line*/
    })
    .catch((error) => {
      throw error
    });
  };


  // api end point to find similar movies
  export const getSimilarMovies = (args) => {
    const [, idPart] = args.queryKey;
    const  { id } = idPart;
    return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
    .then((response) => {
      if (!response.ok){
        throw new Error(response.json().message);
      }
      return response.json(); /*return should be in this same line else it will show syntax error*/
    })
    .catch((error) => {
      throw error
    });
  };

  // images for the show list cards
  export const getTVShowImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };


  export const getSingleActor = (args) => {
   const [, idPart] = args.queryKey;
   const { id } = idPart;
   return fetch(
     `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
   ).then((response) => {
     if (!response.ok) {
       throw new Error(response.json().message);
     }
     return response.json();
   })
   .catch((error) => {
     throw error
  });
 };

 export const getSingleActorImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const getTVShow = (args) => {
 const [, idPart] = args.queryKey;
 const { id } = idPart;
 return fetch(
   `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
 ).then((response) => {
   if (!response.ok) {
     throw new Error(response.json().message);
   }
   return response.json();
 })
 .catch((error) => {
   throw error
});
};

export const getTVShowGenres = async () => {
return fetch(
  "https://api.themoviedb.org/3/genre/tv/list?api_key=" + process.env.REACT_APP_TMDB_KEY + "&language=en-US"
).then( (response) => {
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
})
.catch((error) => {
  throw error
});
};

  // api end point to get tv actors
  export const getTVActors = (args) => {
    const [, idPart] = args.queryKey;
    const  { id } = idPart;
    return fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`)
    .then((response) => {
      if (!response.ok){
        throw new Error(response.json().message);
      }
      return response.json(); /*return should be in this same line*/
    })
    .catch((error) => {
      throw error
    });
  };