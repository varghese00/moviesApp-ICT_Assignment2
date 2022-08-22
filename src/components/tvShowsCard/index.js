import React, {useContext} from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck'; // new declared for must watch icon in upcoming page

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function TVShowCard({ tvshow, action }) {
  const classes = useStyles();
  const { tvFavourites, playlist } = useContext(MoviesContext); // playlist new declared for must watch icon in upcoming page

  if (tvFavourites.find((id) => id === tvshow.id)) {
    tvshow.favourite = true;
  } else {
    tvshow.favourite = false;
  }

  // new block of code for playlist very similar to addding favourites
  if (playlist.find((id) => id === tvshow.id)) {
    tvshow.playlist = true;
  } else {
    tvshow.playlist = false;
  }



 

  return (
    <Card className={classes.card}>
    <CardHeader
      className={classes.header}
      avatar={
        <>
        {
        tvshow.favourite ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
      }
      {/* new code below block for playlist check icon */}
      {
        tvshow.playlist ? (
          <Avatar className={classes.avatar} >
            <PlaylistAddCheckIcon />
          </Avatar>
        ) : null
      }
      </>
    }

      title={
        <Typography variant="h5" component="p">
          {tvshow.name}{" "}
        </Typography>
      }
    />      
    <CardMedia
        className={classes.media}
        image={
          tvshow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {tvshow.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvshow.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {/* {action(tvshow)} */}
        <Link to={`/tvshow/${tvshow.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
