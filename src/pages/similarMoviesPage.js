import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getSimilarMovies,getMovie} from '../api/tmdb-api';
import MovieHeader from "../components/headerMovie";



const SimilarMoviesPage = () => {
  const { id} = useParams();

  const {  data, error, isLoading, isError }  = useQuery(['similar', {id: id}], getSimilarMovies)

  const { data:movie } = useQuery(["movie", { id: id }],getMovie)


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  console.log(id)
  console.log(typeof(movie))




  return (
    <PageTemplate
      title={`Similar Movies like ${'name'}`}
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};

export default SimilarMoviesPage