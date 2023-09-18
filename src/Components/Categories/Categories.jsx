import React from "react";
import { connect } from "react-redux";
import { category } from "../../store/actions";
import "./style.scss";
import Products from "../Products/Products";
// import { Margin } from "@mui/icons-material";

function Categories(props) {
  return (
    <>
      <h3 style={{ marginTop: "-25px" ,marginLeft:'15px' ,marginBottom:'-1px'}}>Browse our Categories</h3>
      <section>
        <div style={{marginLeft:'20px'}}>
        <span
          style={{ marginRight: "6px" }}
          onClick={() => props.category("GAMES")}
        >
          Games|{" "}
        </span>
        <span
          onClick={() => props.category("FOOD")}
          style={{ marginRight: "6px" }}
        >
          Food|{" "}
        </span>
        <span
          onClick={() => props.category("WEAPONS")}
          style={{ marginRight: "6px" }}
        >
          WEAPONS|{" "}
        </span>
        <span
          onClick={() => props.category("ELECTRONICS")}
          style={{ marginRight: "6px" }}
        >
          ELECTRONICS
        </span>
        </div>
        <div className="category">
          <h3>{props.myCategory.activeCategory}</h3>
        </div>

        {props.myCategory.categories.map((cate, idx) => {
          if (cate.normalizedName === props.myCategory.activeCategory) {
            return (
              <div className="category" key={idx}>
                {cate.description}
              </div>
            );
          }
        })}
      </section>
      <section>
        <Products/>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  myCategory: state.categories,
});
const mapDispatchToProps = { category };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
