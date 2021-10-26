import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetails } from "../../redux/actions/productDetails";
import Header from "../../components/Header/Header";
import { REQUEST_STATUS } from "../../helpers/Constants";
import Modal from "react-modal";
import logox from "../../images/logox.svg";
import "./ProductDetails.scss";
import { putPurchase, resetPutPurchase } from "../../redux/actions/purchase";
import { getGivenOffers } from "../../redux/actions/givenOffers";
import { postOffer, resetPostOffer } from "../../redux/actions/offer";
import { cancelOffer, resetCancelOffer } from "../../redux/actions/cancelOffer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import buyLogo from "../../images/buy-logo.svg";
import { useForm } from "react-hook-form";

function ProductDetails() {
  const radio1 = useRef(null);
  const radio2 = useRef(null);
  const radio3 = useRef(null);

  const disableRadio = () => {
    radio1.current.className = "disabled";
    radio2.current.className = "disabled";
    radio3.current.className = "disabled";
  };

  const enableRadio = () => {
    radio1.current.className = "enabled";
    radio2.current.className = "enabled";
    radio3.current.className = "enabled";
    setPrice("");
  };
  const [isOpenBuy, setIsOpenBuy] = useState(false);

  const purchase = useSelector((state) => state.purchase);

  const [price, setPrice] = useState();

  const [offerId, setOfferId] = useState();
  const openProductDetailModal = () => {
    setIsOpenBuy(true);
  };
  const closeBuyModal = () => {
    setIsOpenBuy(false);
  };
  const [isOpenOffer, setIsOpenOffer] = useState(false);
  const openOfferModal = () => {
    setIsOpenOffer(true);
  };
  const closeOfferModal = () => {
    setIsOpenOffer(false);
  };
  const productDetails = useSelector((state) => state.details);
  const givenOffers = useSelector((state) => state.givenOffers);
  const cancelOfferState = useSelector((state) => state.cancelOffer);
  const offer = useSelector((state) => state.offer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [hasOffered, setHasOffered] = useState(false);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const purchaseProduct = () => {
    dispatch(putPurchase(id));
  };
  const postOfferPrice = () => {
    dispatch(postOffer(id, Number(price)));
  };
  const cancelOfferButton = () => {
    dispatch(cancelOffer(offerId));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getGivenOffers());
  }, [dispatch]);

  useEffect(() => {
    console.log("GIVENN OFFERR");
    console.log(givenOffers);
    givenOffers.data.map((offer) => {
      if (
        offer.product.id === productDetails.data.id &&
        offer.status === "offered"
      ) {
        setHasOffered(true);
        setOfferId(offer.id);
      }
    });
  }, [givenOffers]);

  useEffect(() => {
    if (purchase.status === REQUEST_STATUS.SUCCESS) {
      setIsOpenBuy(false);
      toast.success("Satın alındı..", {
        hideProgressBar: true,
        autoClose: 3000,
        icon: ({ theme, type }) => <img src={buyLogo} alt="productbuylogo" />,
      });
      dispatch(getProductDetails(id));
      dispatch(resetPutPurchase());
    }
  }, [purchase]);

  useEffect(() => {
    if (offer.status === REQUEST_STATUS.SUCCESS) {
      setIsOpenOffer(false);
      toast.success("Teklif verildi.", {
        hideProgressBar: true,
        autoClose: 3000,
        icon: ({ theme, type }) => <img alt="productbuylogo" src={buyLogo} />,
      });
      dispatch(getGivenOffers());
      dispatch(resetPostOffer());
    }
  }, [offer]);

  useEffect(() => {
    if (cancelOfferState.status === REQUEST_STATUS.SUCCESS) {
      toast.success("Teklif geri çekildi.", {
        hideProgressBar: true,
        autoClose: 3000,
        icon: ({ theme, type }) => <img alt="productbuylogo" src={buyLogo} />,
      });
      setHasOffered(false);
      setOfferId("");
      dispatch(resetCancelOffer());
    }
  }, [cancelOfferState]);

  return (
    <div>
      <Header />
      {productDetails.status === REQUEST_STATUS.PENDING && (
        <div>Loading...</div>
      )}
      {productDetails.status === REQUEST_STATUS.SUCCESS && (
        <div className="product-detail-container">
          <div className="detail-card-container">
            <div className="detail-card-image">
              <img
                alt="productdetailsimage"
                src={productDetails.data.imageUrl}
              ></img>
            </div>
            <div className="product-details">
              <div className="product-details-name">
                {productDetails.data.title}
              </div>
              <div className="mobile-prices">
                <div className="product-details-price-mobile">
                  {productDetails.data.price} TL
                </div>
                {productDetails.data.isOfferable &&
                  hasOffered &&
                  givenOffers.data.map(
                    (item) =>
                      item.product.id === productDetails.data.id && (
                        <div className="given-offers-price-mobile">
                          <span>Verilen Teklif: </span>
                          {item.offeredPrice} TL
                        </div>
                      )
                  )}
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

              {productDetails.data.isOfferable &&
                hasOffered &&
                givenOffers.data.map(
                  (item) =>
                    item.product.id === productDetails.data.id && (
                      <div className="product-details-given-offer-price">
                        <span>Verilen Teklif: </span>
                        {item.offeredPrice} TL
                      </div>
                    )
                )}
              <div className="product-details-buttons">
                {productDetails.data.isSold ? (
                  <div className="bought-product">Bu Ürün Satışta Değil</div>
                ) : (
                  <>
                    <button
                      onClick={openProductDetailModal}
                      id="buy-button"
                      className="button"
                    >
                      Satın Al
                    </button>
                    {/* Modal of buy part */}
                    <Modal isOpen={isOpenBuy} className="buy-modal">
                      <p className="buy-text">Satın Al</p>
                      <p className="buy-question-text">
                        Satın Almak istiyor musunuz?
                      </p>
                      <div className="buy-modal-buttons">
                        <button
                          onClick={closeBuyModal}
                          className="button-secondary"
                        >
                          Vazgeç
                        </button>
                        <button onClick={purchaseProduct} className="button">
                          Satın Al
                        </button>
                      </div>
                    </Modal>

                    {productDetails.data.isOfferable && hasOffered ? (
                      <button
                        onClick={cancelOfferButton}
                        className="button-secondary"
                        id="cancel-offer-button"
                      >
                        Teklifi Geri Çek
                      </button>
                    ) : (
                      <>
                        {productDetails.data.isOfferable && (
                          <button
                            onClick={openOfferModal}
                            id="offer-button"
                            className="button-secondary"
                          >
                            Teklif Ver
                          </button>
                        )}
                        {/* Modal of offer part  */}
                        <Modal isOpen={isOpenOffer} className="offer-modal">
                          <div className="offer-modal-title-wrapper">
                            <p className="offer-modal-title">Teklif Ver</p>
                            <img
                              alt="closebutton"
                              onClick={closeOfferModal}
                              src={logox}
                            />
                          </div>
                          <div className="offer-modal-product-details">
                            <div className="offer-modal-upside">
                              <div className="offer-modal-image">
                                <img
                                  alt={productDetails.data.title}
                                  src={productDetails.data.imageUrl}
                                ></img>
                              </div>
                              <div className="offer-modal-product">
                                <div className="offer-modal-product-title">
                                  {productDetails.data.title}
                                </div>
                                <div className="offer-modal-product-price">
                                  {productDetails.data.price} TL
                                </div>
                              </div>
                            </div>
                            <form onSubmit={handleSubmit(postOfferPrice)}>
                              <div
                                className="offer-modal-options"
                                onClick={enableRadio}
                              >
                                <div className="offer-modal-radio">
                                  <input
                                    type="radio"
                                    name="radio-group"
                                    ref={radio1}
                                    onChange={() => {
                                      setPrice(0.2 * productDetails.data.price);
                                    }}
                                  />
                                  <label htmlFor="">
                                    %20'si Kadar Teklif Ver
                                  </label>
                                </div>
                                <div className="offer-modal-radio">
                                  <input
                                    type="radio"
                                    name="radio-group"
                                    ref={radio2}
                                    onChange={() => {
                                      setPrice(0.3 * productDetails.data.price);
                                    }}
                                  />
                                  <label htmlFor="">
                                    %30'u Kadar Teklif Ver
                                  </label>
                                </div>
                                <div className="offer-modal-radio">
                                  <input
                                    type="radio"
                                    name="radio-group"
                                    ref={radio3}
                                    onChange={() => {
                                      setPrice(0.4 * productDetails.data.price);
                                    }}
                                  />
                                  <label htmlFor="">
                                    %40'ı Kadar Teklif Ver
                                  </label>
                                </div>
                              </div>
                              <div className="offer-modal-price">
                                <input
                                  className="input"
                                  type="number"
                                  value={price}
                                  placeholder="Teklif Belirle"
                                  onFocus={disableRadio}
                                  id={errors.price && "price-error"}
                                  {...register("price", {
                                    min: 0,
                                  })}
                                  onChange={(e) => {
                                    setPrice(e.target.value);
                                  }}
                                />
                                <span id="tl-text">TL</span>
                              </div>
                              <div className="offer-modal-button">
                                <button
                                  id="offer-modal-accept-button"
                                  className="button"
                                >
                                  Onayla
                                </button>
                              </div>
                            </form>
                          </div>
                        </Modal>
                      </>
                    )}
                  </>
                )}
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
