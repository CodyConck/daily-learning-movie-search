import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// in case there is no image for the movie
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

const Movie = ({ movie }) => {
  const poster =
    // if movie poster response is N/A, use default image or use movie.poster as poster
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <Grid container className="movie">
      <Grid item>
        <Paper className="movie-info" style={{ color: "black" }}>
          <h2>{movie.Title}</h2>
          <img
            width="200"
            src={poster}
            alt={`The movie titled: ${movie.Title}`}
          />
          <p>({movie.Year})</p>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Movie;
