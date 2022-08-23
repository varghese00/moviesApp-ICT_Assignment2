import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MoviesContext = React.createContext(null);


const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} );
  const [playlist, setPlaylists] = useState([]); //newly added for must watch
  const [tvFavourites, setTvFavourites] = useState([]);
  const [movieFavourites, setMovieFavourites] = useState([]);
  const navigate = useNavigate();



 


  const addToFavourites = (movie,tvshow) => {
    if (!movieFavourites.includes(movie.id)) {
      let newFavourites = [...movieFavourites, movie.id];
      setMovieFavourites(newFavourites);
      
    }else {
      let newFavourites = [...tvFavourites, tvshow.id];
      setTvFavourites(newFavourites);
    }
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie,tvshow) => {
    if (!movieFavourites.includes(movie.id)) {
    setMovieFavourites(movieFavourites.filter((mId) => mId !== movie.id));
  }
  else{
    setTvFavourites(tvFavourites.filter((mId) => mId !== tvshow.id));
  }

  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  // adding must watch functionality in upcoming movies page
  const addToPlaylists = (movie) => {
    if (!playlist.includes(movie.id)) {
      let newPlaylists = [...playlist, movie.id];
      setPlaylists(newPlaylists);
    }
  };



  return (
    <MoviesContext.Provider
      value={{
        movieFavourites,
        tvFavourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToPlaylists, // newly added for must watch playlist button
        playlist, // newly added for must watch playlist rendering page
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;