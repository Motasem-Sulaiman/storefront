import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import Typography from "@mui/material/Typography";
// import { useState, useEffect } from "react";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function ShoppingCart(props) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let count = 0;
    props.cart.products.forEach((item) => {
      count += item.price;
    });
    setTotal(count);
  }, [props.cart.products]);

  // Handler for form submission
  const submitHandler = (e) => {
    e.preventDefault();
    window.alert("Thank you for your purchase");
  };

  return (
    <Card sx={{ width: 800, margin: "auto", minHeight: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          Order summary
        </Typography>
        <Typography variant="h5" component="div">
          <ul className="list2">
            {props.cart.products.map((item, id) => {
              return (
                <>
                  <li className="lis2" key={id}>
                    {item.name} <span className="price">${item.price}</span>
                  </li>
                </>
              );
            })}
          </ul>
        </Typography>
        <Typography sx={{ fontSize: 20 }}>Total : ${total}</Typography>
        <Typography sx={{ fontSize: 20, marginTop: "10px" }}>
          Billing Address <span style={{ marginLeft: "300px" }}>Payment details</span>
        </Typography>
        <Typography variant="body2" style={{ marginTop: "10px", marginLeft: "10px" }} class='container'>
          <form onSubmit={submitHandler} class="form-1">
            <input placeholder="Full Name" class="inp" />
            <input placeholder="Address" class="inp" />
            <input placeholder="City" class="inp" />
            <input placeholder="State" class="inp" />
            <input placeholder="Zip" class="inp" />
            <Button type="submit" size="small" style={{ marginLeft: "10px", backgroundColor: "#3f51b5", color: "white" }}>
              Place Your Order
            </Button>
          </form>

          <form class="form-2">
            <input placeholder="Credit Card#" class="inp" />
            <input placeholder="Expiration Date" class="inp" type="Date" />
            <input placeholder="City" class="inp" />
          </form>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(ShoppingCart);