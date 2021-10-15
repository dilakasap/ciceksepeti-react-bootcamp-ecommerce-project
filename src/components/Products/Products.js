import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { REQUEST_STATUS } from "../../helpers/Constants";
import { getProducts } from "../../redux/actions/products";
import "./Product.scss";

function Products() {
  const dispatch = (Products = useDispatch());
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
      {products.status === REQUEST_STATUS.PENDING && <div>Loading...</div>}
      {products.status === REQUEST_STATUS.SUCCESS && (
        <div className="product-container">
          {products.data.map((item) => (
            <div
              onClick={() => toProductDetails(item.id)}
              className="product-card"
              key={item.id}
            >
              <div className="image">
                <img src={item.imageUrl}></img>
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
