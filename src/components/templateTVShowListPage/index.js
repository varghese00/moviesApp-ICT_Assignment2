import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import TVShowList from "../tvShowsCardList"

const useStyles = makeStyles((theme) =>  ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function TVShowPageListTemplate({ tvshows, title, action}) {
  const classes = useStyles();
  const [tvFilter, setTvFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);



  // for displaying tv shows list template
  let displayedTVShows = tvshows
  .filter((m) => {
    return m.name.toLowerCase().search(tvFilter.toLowerCase()) !== -1;
  })
  .filter((m) => {
    return genreId > 0 ? m.genre_ids.includes(genreId) : true;
  });

 const handleChange = (type, value) => {
  if (type === "name") setTvFilter(value);
  else setGenreFilter(value);
};


  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={2}>
        <TVShowList action={action} tvshows={displayedTVShows}/>
      </Grid>
    </Grid>
    <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          tvFilter={tvFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>   
   
  );
};

export default TVShowPageListTemplate;