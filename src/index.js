import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PlaylistMoviesPage from "./pages/mustWatchMoviesPage"
import TVShowsPage from "./pages/tvShowsPage"


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 360000,
      refetchInterval:360000,
      refetchOnWindowFocus:false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>

<SiteHeader />      {/* New Header with TMDB Client and dropdown menu  */}

<MoviesContextProvider>

      <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route  path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/playlist" element={<PlaylistMoviesPage />} />
        <Route path="/tvshows" element={<TVShowsPage />} />
      </Routes>

  </MoviesContextProvider>
  

      
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
