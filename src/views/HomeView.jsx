import React from "react";
import useMovies from "../hooks/useMovies";
import MoviesCarrousel from "../components/MoviesCarrousel";
import MoviesCarrouselReusable from "../components/MoviesCarrouselReusable";
import { Box, Typography } from "@mui/material";

const HomeView = () => {
  const { movies, loading } = useMovies();

  return (
    <Box sx={{ width: "90%", margin: "auto" }}>
      <Box sx={{ width: "90%", marginBottom: "50px", margin: "auto" }}>
        <MoviesCarrousel movies={movies} loading={loading} sx={{margin: "auto"}} />
      </Box>

      <Box sx={{ marginBottom: "60px", marginTop: "70px", }}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          Popular Movies
        </Typography>
        <MoviesCarrouselReusable category="popular" sx={{}} />
      </Box>

      <Box sx={{ marginBottom: "60px", marginTop: "40px",}}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          Top Rated Movies
        </Typography>
        <MoviesCarrouselReusable category="top_rated" sx={{}} />
      </Box>
    </Box>
  );
};

export default HomeView;
