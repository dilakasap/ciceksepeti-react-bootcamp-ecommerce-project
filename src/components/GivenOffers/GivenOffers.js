import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGivenOffers } from "../../redux/actions/givenOffers";
import "./GivenOffers.scss";
function GivenOffers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGivenOffers());
  }, [dispatch]);
  const givenOffers = useSelector((state) => state.givenOffers);
  return (
    <div>
      {givenOffers.data.map((item) => (
        <div key={item.id} className="given-offers-tab">
          <div className="given-offers-image">
            <img alt={item.title} src={item.imageUrl}></img>
          </div>
          <div className="given-offers-left-side">
            <div className="given-offers-info">
              <div className="given-offers-title">{item.title}</div>
              <div className="given-offers-price">
                <span>Verilen Teklif: </span>119,90 TL
              </div>
            </div>

            <div className="given-offers-right-side">
              <button id="given-offers-buy-button" className="button">
                Satın Al
              </button>
              <span>Onaylandı</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GivenOffers;
