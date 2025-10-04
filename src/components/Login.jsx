import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import loginPic from "../assets/login.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
 
    // this function is used for whenever input change in textfield box 
    const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    // this function used for to navigate movie page after sucessfull login authentication
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
        navigate("/movies", { replace: true })
    };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${loginPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          width: 350,
          borderRadius: 3,
          bgcolor: "#fff",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          🎬 Movie Hub
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={onInputChange}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#ff4444",
              "&:hover": { backgroundColor: "#e63939" },
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
