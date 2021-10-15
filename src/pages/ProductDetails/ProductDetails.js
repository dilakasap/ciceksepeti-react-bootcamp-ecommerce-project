import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetails } from "../../redux/actions/productDetails";
import Header from "../../components/Header/Header";
import { REQUEST_STATUS } from "../../helpers/Constants";
import "./ProductDetails.scss";

function ProductDetails() {
  const productDetails = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  console.log(productDetails);
  return (
    <div>
      <Header />
      {productDetails.status===REQUEST_STATUS.PENDING && <div>Loading...</div>}
      {productDetails.status === REQUEST_STATUS.SUCCESS && (
        <div className="product-detail-container">
          <div className="detail-card-container">
            <div className="detail-card-image">
              <img src={productDetails.data.imageUrl}></img>
            </div>
            <div className="product-details">
              <div className="product-details-name">
                {productDetails.data.title}
              </div>
              <div className="product-details-brand">
                <span>Marka:</span>
                {productDetails.data.brand.title}
              </div>
              <div className="product-details-color">
                <span>Renk:</span>
                {productDetails.data.color.title}
              </div>
              <div className="product-details-status">
                <span>Kullanım Durumu:</span>
                {productDetails.data.status.title}
              </div>
              <div className="product-details-price">
                {productDetails.data.price} TL
              </div>
              <div className="product-details-buttons">
                <button id="buy-button" className="button">Satın Al</button>
                <button id="offer-button" className="button-secondary">Teklif Ver</button>
              </div>
              <div className="product-details-description">
                <p>Açıklama</p>
                {productDetails.data.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
