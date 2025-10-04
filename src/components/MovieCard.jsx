import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ img, title, year,id }) {
   
     const navigate = useNavigate();
     // method is used for fetching the movie detail of particular movie 
    const fetchMovieDetail=async(id)=>{
        try {
     const resp = await axios.get(`https://api.imdbapi.dev/titles/${id}`);
      console.log("movies data ", resp.data);  
      navigate("/movieDetail", { state: { movie: resp.data } });
        } catch (error) {
            console.log("error is occured ",error)
        }
    }
  return (
    <Card
       sx={{
                width: 250,
                height: 450,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s", // smooth animation
                "&:hover": {
                transform: "scale(1.05)", // zoom effect
                boxShadow: 6, // optional: stronger shadow on hover
                },
            }}
    >
      <CardActionArea
       onClick={()=>fetchMovieDetail(id)}
       sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        
        <CardMedia
          component="img"
          image={img}
          alt={title}
          sx={{
            height: 350,          
            width: "100%",
            objectFit: "contain",   
            backgroundColor: "#f5f5f5",
          }}
        />

        
        <CardContent
          sx={{
            textAlign: "center",
            flexGrow: 1,           
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 600, fontSize: "1rem" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
