import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../store/cart";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue } from "@mui/material/colors";
import img from './reactt.png'

function Products(props) {
  return (
    <>
     
      {" "}
      {props.myProducts.products.map((item, id) => {
        if (item.categoryAssociation === props.myCategory.activeCategory) {

          return(
         <div style={{float:'left',paddingLeft:"4%",}} key={id}>
            <Card  sx={{ width: '345px' ,marginLeft:"40%",marginTop:"20%",color:blue}}>
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
               <p>Count :{item.inventoryCount}</p> 
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>{props.addItem(item)}}>ADD TO CART</Button>
              <Button size="small">VIEW DETAILS</Button>
            </CardActions>
          </Card>

          </div>

          )
          // {props.addItem(item)}
     
          
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
export default connect(mapStateToProps,mapDispatchToProps)(Products);
