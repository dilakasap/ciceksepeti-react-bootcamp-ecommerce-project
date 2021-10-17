import { REQUEST_STATUS } from "../../helpers/Constants";
import{GET_RECEIVED_OFFERS_PENDING,GET_RECEIVED_OFFERS_SUCCESS,GET_RECEIVED_OFFERS_ERROR} from "../constants/receivedOffers";
const initial_state ={
  data:[],
  status:"",
  error:"",
}
export const receivedOffersReducer =(state=initial_state,action)=>{
  switch (action.type) {
    case GET_RECEIVED_OFFERS_PENDING:
      return {...state,status:REQUEST_STATUS.PENDING};
    case GET_RECEIVED_OFFERS_SUCCESS:
      return {...state,status:REQUEST_STATUS.SUCCESS,data:action.payload};
    case GET_RECEIVED_OFFERS_ERROR:
      return {...state,status:REQUEST_STATUS.ERROR,error:action.payload};
    default:
      return state;
  }
};