import React from "react";
import PageTemplate from "../components/templateTVShowListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvShows} from '../api/tmdb-api'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const TVShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover tv shows', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvshows = data.results;

  


  return (
    <PageTemplate
      title="Discover TV Shows"
      tvshows={tvshows}

    />
);
};

export default TVShowsPage;