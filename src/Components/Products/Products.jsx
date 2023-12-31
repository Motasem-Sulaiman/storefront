import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../store/actions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";
import img from "./product.jpg";

function Products(props) {
  return (
    <>
      {" "}
      {console.log(props.myCategory.activeCategory)}
      {/* {console.log(props.myProducts.products)} */}
      {props.myProducts.products.map((item, id) => {
        // console.log(item.cateAssociation)
        if (item.cateAssociation === props.myCategory.activeCategory) {
          if (item.count > 0) {
            return (
              <div style={{ float: "left", paddingLeft: "4%" }} key={id}>
                <Card
                  sx={{
                    width: "345px",
                    marginLeft: "40%",
                    marginTop: "20%",
                    color: blue,
                  }}
                >
                  <CardMedia
                    sx={{ height: 160 }}
                    image={img}
                    // title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h4>{item.name}</h4>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p>Description :{item.description}</p>
                      <p>Price :{item.price}</p>
                      <p>Count :{item.count}</p>
                    </Typography>
                  </CardContent>
                  <CardActions style={{ backgroundColor: "#eee" }}>
                    <Button
                      size="small"
                      onClick={() => {
                        props.addItem(item);
                      }}
                    >
                      ADD TO CART
                    </Button>
                    <Link to={`/details/${item.id}`}>
                      <Button size="small">VIEW DETAILS</Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
            );
            // {props.addItem(item)}
          }
        }
      })}
      
    </>
  );
}
const mapStateToProps = (state) => ({
  myProducts: state.product,
  myCategory: state.categories,
});
const mapDispatchToProps = { addItem };
// const mapDispatchToProps = { products };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
