import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";



const useStyles = makeStyles({
    card: { maxWidth: 200 },
    media: { height: 300 },
  });

  export default function ActorCard({actor}) {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : `${process.env.PUBLIC_URL}/actor.jpg`
          }
        />
        <CardContent>
          <Grid container>
            <Grid item xs={60}>
              <Typography variant="h5" component="p">{actor.name}{" "} Plays </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h5" component="p">{actor.character}{" "}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing>
        <Link to={`/actor/${actor.id}`}>
        <Button variant="outlined" size="medium" color="primary">
            Actor Bio ...
          </Button>
        </Link>
        </CardActions>
      </Card>
    );
  }