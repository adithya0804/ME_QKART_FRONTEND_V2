import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory,Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const username=localStorage.getItem("username")
  const history = useHistory();
    return (
      <Box className="header">
        <Box className="header-title">
         <Link to="/"><img src="logo_light.svg" alt="QKart-icon"></img> </Link>
        </Box>
        {children}
           { hasHiddenAuthButtons?(<Button onClick={()=>history.push("/")}
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
        >
          Back to explore
        </Button>) : (username?(<Stack
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  spacing={2}>
    
    <Avatar alt={username} src="avatar.png"/>
    <span class="username-text">{username}</span>
    <Button onClick={()=>{
                          localStorage.clear()
                          window.location.reload()
                           }}
            variant="text">
         Logout
        </Button>
  </Stack>):(
   
        <Stack
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
  spacing={2}>
      
<Button onClick={()=>history.push("/login")}
          
           variant="text">
         Login
        </Button>
        <Button onClick={()=>history.push("/register")}  variant="contained">Register</Button></Stack>
))}
      </Box>
    );
};

export default Header;
