import{GET_EMAIL_PENDING,GET_EMAIL_SUCCESS,GET_EMAIL_ERROR} from "../constants/email";
import {REQUEST_STATUS} from "../../helpers/Constants";
const initial_state ={
  data:[],
  status:"",
  error:"",
}
export const emailReducer =(state=initial_state,action)=>{
  switch (action.type) {
    case GET_EMAIL_PENDING:
      return {...state,status:REQUEST_STATUS.PENDING};
    case GET_EMAIL_SUCCESS:
      return {...state,status:REQUEST_STATUS.SUCCESS,data:action.payload};
    case GET_EMAIL_ERROR:
      return {...state,status:REQUEST_STATUS.ERROR,error:action.payload};
    default:
      return state;
  }
};