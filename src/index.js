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
import ActorDetailsPage from "./pages/actorDetailsPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import TVShowDetailsPage from "./pages/tvShowDetailsPage";
import Navigation from "@material-ui/icons/Navigation";
import LoginPage from "./pages/loginPage";
import Register from "./pages/registerPage";
import Reset from "./pages/resetPage";
import Dashboard from "./pages/dashBoardPage";
import Login from "./pages/loginPage";
import PrivateRoute from "./privateRoute";


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
    <Navigation />

<SiteHeader />      {/* New Header with TMDB Client and dropdown menu  */}


<MoviesContextProvider>

      <Routes>
        <Route path="/movies/favourites" element={ <PrivateRoute> <FavouriteMoviesPage  /> </PrivateRoute> } />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route  path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/playlist" element={ <PrivateRoute> <PlaylistMoviesPage  /> </PrivateRoute> } />
        <Route path="/tvshows" element={<TVShowsPage />} />
        <Route path="/actor/:id" element={<ActorDetailsPage/>} />
        <Route path="/movies/:id/similar" element={<SimilarMoviesPage/>} />
        <Route path="/tvshow/:id" element={<TVShowDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Login />} />




      </Routes>

  </MoviesContextProvider>
  

      
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
