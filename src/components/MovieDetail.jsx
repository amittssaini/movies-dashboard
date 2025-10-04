import React from "react";
import { Box, Typography, Chip, Stack, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const MovieDetail = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) 
  {
      return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',   
        alignItems: 'center',      
        height: '100vh',            
      }}
    >
      <CircularProgress />
    </Box>
  );
  }


  const formatRuntime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const hrs = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    return `${hrs}h ${remainingMins}m`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        mb: 4,
        px: 2,
      }}
    >
      {/* Movie Image */}
      <Box
        component="img"
        src={movie.primaryImage?.url}
        alt={movie.primaryTitle}
        sx={{ width: 180, borderRadius: 2, mb: 2 }}
      />

      {/* Title */}
      <Typography variant="h4" gutterBottom textAlign="center">
        {movie.primaryTitle} ({movie.startYear})
      </Typography>

      {/* Rating & Runtime */}
      <Typography variant="subtitle1" gutterBottom textAlign="center">
        ⭐ {movie.rating?.aggregateRating} ({movie.rating?.voteCount} votes) |{" "}
        {formatRuntime(movie.runtimeSeconds)} | {movie.type}
      </Typography>

      <Divider sx={{ width: "60%", my: 2 }} />

      {/* Plot */}
      <Typography variant="body1" gutterBottom textAlign="center">
        {movie.plot}
      </Typography>

      <Divider sx={{ width: "60%", my: 2 }} />

      {/* Genres */}
      <Typography variant="subtitle1" gutterBottom textAlign="center">
        Genres:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" sx={{ mb: 2 }}>
        {movie.genres?.map((g, index) => (
          <Chip label={g} key={index} color="primary" />
        ))}
      </Stack>

      {/* Directors */}
      <Typography variant="subtitle1" gutterBottom textAlign="center">
        Directors:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" sx={{ mb: 2 }}>
        {movie.directors?.map((d) => (
          <Typography key={d.id} textAlign="center">
            {d.displayName}
          </Typography>
        ))}
      </Stack>

      {/* Writers */}
      <Typography variant="subtitle1" gutterBottom textAlign="center">
        Writers:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" sx={{ mb: 2 }}>
        {movie.writers?.map((w) => (
          <Typography key={w.id} textAlign="center">
            {w.displayName}
          </Typography>
        ))}
      </Stack>

      {/* Stars */}
      <Typography variant="subtitle1" gutterBottom textAlign="center">
        Stars:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" sx={{ mb: 2 }}>
        {movie.stars?.map((s) => (
          <Typography key={s.id} textAlign="center">
            {s.displayName}
          </Typography>
        ))}
      </Stack>

      {/* Languages & Countries */}
      <Typography variant="body2" gutterBottom textAlign="center">
        Languages: {movie.spokenLanguages?.map((l) => l.name).join(", ")}
      </Typography>
      <Typography variant="body2" gutterBottom textAlign="center">
        Countries: {movie.originCountries?.map((c) => c.name).join(", ")}
      </Typography>

      {/* Interests */}
      <Typography variant="subtitle1" gutterBottom textAlign="center" sx={{ mt: 2 }}>
        Interests:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
        {movie.interests?.map((i) => (
          <Chip key={i.id} label={i.name} variant="outlined" />
        ))}
      </Stack>
    </Box>
  );
};

export default MovieDetail;
