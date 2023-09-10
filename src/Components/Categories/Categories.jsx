import React from "react";
import { connect } from "react-redux";
import { category } from "../../store/categories";
import "./style.scss";
import Products from "../Products/Products";
// import { Margin } from "@mui/icons-material";

function Categories(props) {
  return (
    <>
      <h4 style={{ marginTop: "-50px" }}>Browse our Categories</h4>
      <section>
        <span
          style={{ marginRight: "6px",  }}
          onClick={() => props.category("Games")}
        >
          Games|{" "}
        </span>
        <span onClick={() => props.category("Food") }>Food</span>

        <div className="category"><h3>{props.myCategory.activeCategory}</h3></div>

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
    </>
  );
}

const mapStateToProps = (state) => ({
  myCategory: state.categories,
});
const mapDispatchToProps = { category };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
