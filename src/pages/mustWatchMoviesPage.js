import React, { useContext } from "react";
import { getMovie } from "../api/tmdb-api";
import { MoviesContext } from "../contexts/moviesContext";
import Spinner from "../components/spinner";
import { useQueries } from "react-query";
import PageTemplate from "../components/templateMovieListPage";

const MustWatchMoviesPage = () => {
    const { playlist: movieIds } = useContext(MoviesContext);
  
    // Create an array of queries and run in parallel.
    const playlistMovieQueries = useQueries(
      movieIds.map((movieId) => {
        return {
          queryKey: ["movie", { id: movieId }],
          queryFn: getMovie,
        };
      })
    );
    // Check if any of the parallel queries is still loading.
    const isLoading = playlistMovieQueries.find((m) => m.isLoading === true);
  
    if (isLoading) {
      return <Spinner />;
    }
  
    const movies = playlistMovieQueries.map((q) => {
      q.data.genre_ids = q.data.genres.map((g) => g.id);
      return q.data;
    });
  
  
    return (
      <PageTemplate
        title="Playlist Movies"
        movies={movies}
        action={(movie) =>{
            return(
                <>
                </>
            )
        }}
      />
    );
  };
  
  export default MustWatchMoviesPage;