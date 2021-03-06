import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGivenOffers } from "../../redux/actions/givenOffers";
import { putPurchase, resetPutPurchase } from "../../redux/actions/purchase";
import Modal from "react-modal";
import "./GivenOffers.scss";
import { REQUEST_STATUS } from "../../helpers/Constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import buyLogo from "../../images/buy-logo.svg";
function GivenOffers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGivenOffers());
  }, [dispatch]);
  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const openProductDetailModal = () => {
    setIsOpenBuy(true);
  };
  const closeBuyModal = () => {
    setIsOpenBuy(false);
  };
  const purchaseProduct = (id) => {
    dispatch(putPurchase(id));
    setIsOpenBuy(false);
  };

  const purchase = useSelector((state) => state.purchase);
  useEffect(() => {
    if (purchase.status === REQUEST_STATUS.SUCCESS) {
      dispatch(resetPutPurchase());
      dispatch(getGivenOffers());
      closeBuyModal();
      toast.success("Satın alındı.", {
        hideProgressBar: true,
        autoClose: 3000,
        icon: ({ theme, type }) => <img alt="buylogotoastify" src={buyLogo} />,
      });
    }
  }, [purchase]);

  const givenOffers = useSelector((state) => state.givenOffers);
  console.log(givenOffers);
  return (
    <div>
      {/* loader */}
      {givenOffers.status === REQUEST_STATUS.PENDING && (
        <div class="loading-offer">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      )}
      {givenOffers.status === REQUEST_STATUS.SUCCESS &&
        givenOffers.data.map((item) => (
          <div key={item.id} className="given-offers-tab">
            <div className="given-offers-image">
              <img alt={item.product.title} src={item.product.imageUrl}></img>
            </div>
            <div className="given-offers-left-side">
              <div className="given-offers-info">
                <div className="given-offers-title">{item.product.title}</div>
                <div className="given-offers-price">
                  <span>Verilen Teklif: </span>
                  {item.offeredPrice} TL
                </div>
              </div>
              <div className="given-offers-right-side">
                {item.isSold ? (
                  <div className="bought">Satın Alındı</div>
                ) : (
                  <>
                    {item.status === "offered" && (
                      <div className="accepted">Teklif Verildi</div>
                    )}
                    {item.status === "rejected" && (
                      <div className="rejected">Reddedildi</div>
                    )}

                    {item.status === "accepted" && (
                      <>
                        <button
                          onClick={openProductDetailModal}
                          id="given-offers-buy-button"
                          className="button"
                        >
                          Satın Al
                        </button>
                        {/* if the offer accepted open buy modal */}
                        <Modal isOpen={isOpenBuy} className="buy-modal">
                          <p className="buy-text">Satın Al</p>
                          <p className="buy-question-text">
                            Satın Almak istiyor musunuz?
                          </p>
                          <div className="buy-modal-buttons">
                            <button
                              onClick={() => closeBuyModal()}
                              className="button-secondary"
                            >
                              Vazgeç
                            </button>
                            <button
                              onClick={() => purchaseProduct(item.product.id)}
                              className="button"
                            >
                              Satın Al
                            </button>
                          </div>
                        </Modal>
                        <span className="accepted">Onaylandı</span>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default GivenOffers;
