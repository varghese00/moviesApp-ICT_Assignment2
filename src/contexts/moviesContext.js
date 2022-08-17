import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState( {} );
  const [playlist, setPlaylists] = useState([]); //newly added for must watch
 


  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
      
    }
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
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
        favourites,
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