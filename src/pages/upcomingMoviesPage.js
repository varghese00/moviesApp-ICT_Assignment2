import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage"
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

      // const addToFavourites = () => null;

      return(

        <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {return <PlaylistAddIcon movie={movie} color="primary" fontSize="large" />}}
      />      
      );

};

export default UpcomingMoviesPage;
 