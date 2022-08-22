import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getTVShow } from "../api/tmdb-api";
import TVShowDetails from "../components/tvShowDetails"
import TemplateTVShowPage from "../components/templateTVShowPage"

const TVShowDetailsPage = () => {
  const { id } = useParams();
  const { data: tvshow, error, isLoading, isError } = useQuery(
    ["tvshow", { id: id }],
    getTVShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvshow ? (
        <>
          <TemplateTVShowPage tvshow={tvshow}>
            <TVShowDetails tvshow={tvshow} />
          </TemplateTVShowPage>
        </>
      ) : (
        <p>Waiting for TV Show details</p>
      )}
    </>
  );
};

export default TVShowDetailsPage;