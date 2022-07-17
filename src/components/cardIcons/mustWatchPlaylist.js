import React, {useContext} from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import IconButton from "@material-ui/core/IconButton";


const MustWatchPlaylistAddIcon = ({ movie }) => {
    const context = useContext(MoviesContext);
  
    const handleAddToPlaylist = (e) => {
      e.preventDefault();
      context.addToPlaylists(movie);
    };
    return (
      <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
        <PlaylistAdd color="primary" fontSize="large" />
      </IconButton>
    );
  };

  export default MustWatchPlaylistAddIcon;