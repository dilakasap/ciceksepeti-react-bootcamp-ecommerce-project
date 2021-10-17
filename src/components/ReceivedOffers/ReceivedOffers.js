import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReceivedOffers } from "../../redux/actions/receivedOffers";
import "./ReceivedOffers.scss";
function ReceivedOffers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReceivedOffers());
  }, [dispatch]);
  const receivedOffers = useSelector((state) => state.receivedOffers);
  return (
    <div>
      {receivedOffers.data.map((item) => (
        <div key={item.id} className="given-offers-tab">
          <div className="given-offers-image">
            <img alt={item.title} src={item.imageUrl}></img>
          </div>
          <div className="given-offers-left-side">
            <div className="given-offers-info">
              <div className="given-offers-title">{item.title}</div>
              <div className="given-offers-price">
                <span>Alınan Teklif: </span>119,90 TL
              </div>
            </div>

            <div className="given-offers-right-side">
              <button className="button" id="accept-button">
                Onayla
              </button>
              <button className="button" id="refuse-button">
                Reddet
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReceivedOffers;
