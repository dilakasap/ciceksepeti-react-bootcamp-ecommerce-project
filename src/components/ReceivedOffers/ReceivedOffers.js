import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReceivedOffers } from "../../redux/actions/receivedOffers";
import { postRejectOffer } from "../../redux/actions/rejectOffer";
import { putAcceptOffer } from "../../redux/actions/acceptOffer";
import "./ReceivedOffers.scss";
import { REQUEST_STATUS } from "../../helpers/Constants";
function ReceivedOffers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReceivedOffers());
  }, [dispatch]);
  const receivedOffers = useSelector((state) => state.receivedOffers);
  const acceptOffer = useSelector((state)=> state.acceptOffer);
  const rejectOffer = useSelector((state)=> state.rejectOffer);
  useEffect(() => {
    if (acceptOffer.status === REQUEST_STATUS.SUCCESS || rejectOffer.status === REQUEST_STATUS.SUCCESS) {
      dispatch(getReceivedOffers());
    }
  }, [acceptOffer, rejectOffer]);
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
                {item.offeredPrice} TL
              </div>
            </div>
            <div className="given-offers-right-side">
            {
              item.status==="offered" && item.isSold !== "sold" &&
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
              item.status==="accepted" && <div className="accepted">Onaylandı</div> 
            }
            {
              item.status==="rejected" && <div className="rejected">Reddedildi</div> 
            }

              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}



export default ReceivedOffers;
