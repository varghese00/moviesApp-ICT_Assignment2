import React, {useEffect,useState} from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage"


const UpcomingMoviesPage = (props) => {
    const [movies,setMovies]= useState([]);
    const favourites = movies.filter(f => f.favourite)
    localStorage.setItem('favourites', JSON.stringify(favourites))

    

    useEffect(() => {
        getUpcomingMovies().then(movies => {
          setMovies(movies);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      const addToFavourites = () => null;

      return(

        <PageTemplate title="Upcoming Movies" movies={movies} favourite={addToFavourites} />
      );

};

export default UpcomingMoviesPage;
 