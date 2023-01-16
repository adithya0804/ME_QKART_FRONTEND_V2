import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";


const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Grid item xs={6} md={3} sm={3}> 
    <Card className="card">
       <CardMedia
       component="img"
       image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="h5"component="div" >
         ${product.cost}
        </Typography>
        <Rating name="read-only" value={product.rating} precision={0.5} readOnly />
      </CardContent>
      <CardActions className="card-actions">
        <Button size="large" variant="contained" color="primary" className="card-button" onClick = {()=>handleAddToCart(localStorage.getItem("token"),[],[],product._id,1,{preventDuplicate:true})}  ><AddShoppingCartOutlined/>ADD TO CART</Button>
      </CardActions>
    </Card>
    </Grid>
  );
};

export default ProductCard;
