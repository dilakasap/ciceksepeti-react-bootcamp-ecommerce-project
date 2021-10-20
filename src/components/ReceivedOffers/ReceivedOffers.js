import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReceivedOffers } from "../../redux/actions/receivedOffers";
import { postRejectOffer } from "../../redux/actions/rejectOffer";
import { putAcceptOffer } from "../../redux/actions/acceptOffer";

import "./ReceivedOffers.scss";
function ReceivedOffers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReceivedOffers());
  }, [dispatch]);
  const receivedOffers = useSelector((state) => state.receivedOffers);
  console.log(receivedOffers);
  return (
    <div>
      {receivedOffers.data.map((item) => (
        <div key={item.id} className="given-offers-tab">
          <div className="given-offers-image">
            <img alt={item.product.title} src={item.product.imageUrl}></img>
          </div>
          <div className="given-offers-left-side">
            <div className="given-offers-info">
              <div className="given-offers-title">{item.product.title}</div>
              <div className="given-offers-price">
                <span>Alınan Teklif: </span>
                {item.offeredPrice}
              </div>
            </div>
            <div className="given-offers-right-side">
            {
              item.status==="offered" && 
              <>
              <button
                onClick={() => dispatch(putAcceptOffer(item.id))}
                className="button"
                id="accept-button"
              >
                Onayla
              </button>
              <button
                onClick={() => {
                  dispatch(postRejectOffer(item.id));
                }}
                className="button"
                id="refuse-button"
              >
                Reddet
              </button>
              </>
            }
            {
              item.status==="accepted" && <div>Onaylandı..</div> 
            }
            {
              item.status==="rejected" && <div>Reddedildi..</div> 
            }

              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReceivedOffers;
