import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../../store/cart";
import './style.scss'
// import { addItem } from "../../store/products";


function SimpleCart(props) {
    // function handleDelete(name){
    //   newList=props.cart.products.filter((item)=>item!=name)

    // }
  return (
    <>
 <ul className="list">
      {props.cart.products.map((item, id) => {
           {console.log(item)}
        return (
            <li className="lis" key={id}>{item.name} <button id="btn" onClick={()=>{props.removeItem(item)}}>X</button></li>
        )
        
        
        
        
      })}
      </ul>

    </>
  );
}
const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps={ removeItem }

export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart);
