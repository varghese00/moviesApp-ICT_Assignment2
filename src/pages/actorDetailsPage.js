import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner"
import ActorTemplatePage from "../components/templateActorPage"; // for the overall template display of the actor bio page 
import ActorBio from "../components/actorDetails" // for the bio explanation of actor
import { getSingleActor } from "../api/tmdb-api"; // to pull the actor the from tmdb api

const ActorDetailsPage = () => {
    const { id } = useParams();
    const { data: actor, error, isLoading, isError } = useQuery(
      ["actor", { id: id }],
      getSingleActor
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
    return (
      <>
        {actor ? (
          <>
            <ActorTemplatePage actor={actor} title={actor.name}>
              <ActorBio actor={actor} />
            </ActorTemplatePage>
          </>
        ) : (
          <p>Waiting for actor details</p>
        )}
      </>
    );
  };
  
  export default ActorDetailsPage;