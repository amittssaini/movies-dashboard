import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { Grid, Box, Button, TextField, Stack, Chip,InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { addSearchTerm } from "../redux/searchSlice";
import CircularProgress from '@mui/material/CircularProgress';

const Movies = () => {
 
  const [moviesData, setMoviesData] = useState([]); // for storing the movies data in the array
  const [query, setQuery] = useState(""); // for searching 
  const [visibleCount, setVisibleCount] = useState(10);  // for how many videos show 
  const dispatch = useDispatch(); // used for redux 
  const recentSearches = useSelector(state => state.search.recentSearches); //saving the recent searches from redux store to variable 
  const [loading,setLoading]=useState(true)
  //  method is used for fetching the data of moives form api 
  const fetchMoviesAPI = async (search = "") => {
    let URL = `https://api.imdbapi.dev/titles`// without search 
     
        if(search!==""){
            URL = `https://api.imdbapi.dev/search/titles?query=${search}` // with search
        }
    try {
      setLoading(true)
      const resp = await axios.get(URL);
      setMoviesData(resp.data.titles || []);
      setVisibleCount(10);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // use the for first render api call only with empty dependency 
  useEffect(() => {
    fetchMoviesAPI();
  }, []);

    // this useEffect is used for calling the api side effect when user clear the search
    useEffect(() => {  
    if(query==="")
    {
        fetchMoviesAPI();
    }
 
  }, [query]);

  // Handle search
  const handleInputSearch = () => {
    if (!query) return;
    dispatch(addSearchTerm(query));// we add the recent search to the redux store with the dispatch method 
    fetchMoviesAPI(query); /// calling the api with query search
  };

  // Load button function just add the other 10 movies to UI 
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  return (
  <Box
    sx={{
      flexGrow: 1,
      padding: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {/*  Search Box */}
    <Stack
      direction="row"
      spacing={1}
      sx={{ mb: 3, width: "100%", maxWidth: 500 }}
      justifyContent="center" // ✅ center the row itself
      alignItems="center"
    >
      <TextField
        fullWidth
        label="Search movies..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" onClick={handleInputSearch}>
        Search
      </Button>
    </Stack>

    {/* adding recent searches to the UI */}
    <Stack
      direction="row"
      spacing={1}
      sx={{ mb: 3, justifyContent: "center", flexWrap: "wrap", maxWidth: 600 }}
    >
      {recentSearches.map((term, index) => (
        <Chip
          key={index}
          label={term}
          onClick={() => {
            setQuery(term);
            fetchMoviesAPI(term);
          }}
          color="secondary"
        />
      ))}
    </Stack>

    {/*  Movies Grid UI */}
    { loading ?(<Box
          sx={{
            display: 'flex',
            justifyContent: 'center',   
            alignItems: 'center',      
            height: '100vh',            
          }}
        >
          <CircularProgress />
        </Box>):<>
    <Grid
      container
      spacing={3}
      justifyContent="center"  
         
    >
      {moviesData.slice(0, visibleCount).map((movie) => (
        <Grid item xs={12} sm={6} md={3} key={movie.id} display="flex" justifyContent="center">
          <MovieCard
            img={movie.primaryImage?.url}
            id={movie.id}
            title={movie.primaryTitle}
            year={movie.startYear}
          />
        </Grid>
      ))}
    </Grid>

    {/* Load More Button */}
    {visibleCount < moviesData.length && (
      <Box textAlign="center" mt={3}>
        <Button variant="contained" onClick={handleLoadMore}>
          Load More
        </Button>
      </Box>
    )}
    </>}
  </Box>
);
};

export default Movies;
