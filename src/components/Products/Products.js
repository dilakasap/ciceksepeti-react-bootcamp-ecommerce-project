import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { REQUEST_STATUS } from "../../helpers/Constants";
import { getProducts } from "../../redux/actions/products";
import "./Products.scss";

function Products({ selectedCategory }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useSelector((state) => state.products);
  const history = useHistory();
  const toProductDetails = (id) => {
    history.push("/products/" + id);
  };

  return (
    <>
      {products.status === REQUEST_STATUS.PENDING && (
        <div class="loading">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      )}
      {products.status === REQUEST_STATUS.SUCCESS && (
        <div className="product-container">
          {/* map products for the home page */}
          {products.data
            .filter((product) => {
              if (
                selectedCategory === "" ||
                product.category.id === selectedCategory
              ) {
                return product;
              }
            })
            .map((item) => (
              <div
                onClick={() => toProductDetails(item.id)}
                className="product-card"
                key={item.id}
              >
                <div className="image">
                  <img alt="itemimage" src={item.imageUrl}></img>
                </div>
                <div className="top-info">
                  <div className="product-title">{item.brand.title}</div>
                  <div id="product-color">
                    <p>
                      <span>Renk: </span>
                      {item.color.title}
                    </p>
                  </div>
                </div>
                <div className="product-price">{item.price} TL</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default Products;
