import React from "react";
import Movie from "../movieCard";
import Grid from "@material-ui/core/Grid";
import ActorsCard from "../actorCard"
import Spinner from "../spinner";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieActors } from "../../api/tmdb-api";

const ActorsList = ( props ) => {
    const { id } = useParams();
    const {  data:credits, error, isLoading, isError }  = useQuery(['credits', {id: id}], getMovieActors)
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  

    let actorCards= credits.cast.map((actors) => (
      <Grid key= {actors.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <ActorsCard key={actors.id} actor={actors} />
      </Grid>
    ));
    return actorCards;
  }

  export default ActorsList;