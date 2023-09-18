// import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { addItem } from "../../store/actions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";
import img from "./product.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { connect } from "react-redux";
function ProductDetails(props) {
  const { Id } = useParams();
  console.log(Id);

  return (
    <>
      {props.myProducts.products.map((item, idx) => {
        // console.log(item.id)
        // console.log(Id)
        const parsedId = parseInt(Id);
        if (item.id === parsedId) {
          return (
            <>
              <div key={idx}>
                <h1 style={{ marginLeft: "52%", marginBottom: "-280px" }}>
                  {item.name}
                </h1>
                <Card
                  sx={{
                    width: "600px",
                    marginLeft: "38%",
                    marginTop: "20%",
                    color: blue,
                  }}
                >
                  <CardMedia
                    sx={{ height: 160, marginBottom: "200px" }}
                    image={img}
                    // title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    ></Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    ></Typography>
                  </CardContent>
                  <CardActions style={{ backgroundColor: "#eee" }}>
                    {item.count > 0 ? (
                      <h4 style={{ marginLeft: "20px" }}>
                        In Stock:{item.count}
                      </h4>
                    ) : (
                      <h5 style={{ marginLeft: "20px" }}>Empty Stock</h5>
                    )}

                    <h4 style={{ marginLeft: "410px" }}>${item.price}</h4>
                  </CardActions>
                </Card>
                {/* <div key={idx}>{item.name}</div>
              <div >{item.price}</div> */}
              </div>
              {item.count > 0 ? (
                <Button
                  variant="contained"
                  onClick={() => {
                    props.addItem(item);
                  }}
                  style={{
                    width: "600px",
                    marginLeft: "578px",
                    marginTop: "15px",
                  }}
                  disableElevation
                >
                  BUY{" "}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  style={{
                    width: "500px",
                    marginLeft: "578px",
                    marginTop: "15px",
                  }}
                  disableElevation
                >
                  Empty Stock{" "}
                </Button>
              )}
            </>
          );
        }
      })}
      <h1 style={{ marginLeft: "38%" }}>Related Items</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 190,
            height: 60,
          },
        }}
      >
        {/* <Paper style={{marginLeft:'38%'}}elevation={24} />
      <Typography variant="h6">Related Item 1</Typography>
      <Paper elevation={24}/>
      <Paper elevation={24} /> */}
        <Paper elevation={24} style={{ marginLeft: "38%" }}>
          <Typography style={{ padding: "10px" }}>Suggestion 1</Typography>
        </Paper>
        <Paper elevation={24}>
          <Typography style={{ padding: "10px" }}>Suggestion 2</Typography>
        </Paper>
        <Paper elevation={24}>
          <Typography style={{ padding: "10px" }}>Suggestion 3</Typography>
        </Paper>
      </Box>

      <h1 style={{ marginLeft: "38%" }}> Product Details </h1>

   
      <select name="book" id="Book" style={{width:'600px',height:'40px',marginLeft:'38%',backgroundColor:'#fff'}}>
   
          <option value="1" >Products Specs</option>
          <option value="3" selected>Specifications</option>
      </select>

      <select name="book" id="Book" style={{width:'600px',height:'40px',marginLeft:'38%',backgroundColor:'#fff',marginTop:'10px' }}>
   
          <option value="1" selected >User Reviews</option>
          <option value="3" >Reviews ......</option>
      </select>

    </>
  );
}
const mapStateToProps = (state) => ({
  myProducts: state.product,
  myCategory: state.categories,
});
const mapDispatchToProps = { addItem };
// const mapDispatchToProps = { products };
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
