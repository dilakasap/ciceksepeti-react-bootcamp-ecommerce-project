import {
  GET_RECEIVED_OFFERS_PENDING,
  GET_RECEIVED_OFFERS_SUCCESS,
  GET_RECEIVED_OFFERS_ERROR,
} from "../constants/receivedOffers";
import axios from "axios";
import { getProductsApi } from "../../helpers/FakeDataApi";
export const getReceivedOffers = () => (dispatch) => {
  dispatch({ type: GET_RECEIVED_OFFERS_PENDING });
  axios
    .get("https://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
    .then((response) => {
      dispatch({
        type: GET_RECEIVED_OFFERS_SUCCESS,
        payload:[
          {
            "id": "CemsCpCIhCCc1RR8KTVk",
            "brand": {
              "id": "7lGYUTwVdJm3Dspwy5Ps",
              "title": "pull&bear"
            },
            "color": {
              "id": "Y2HjiCtk04eaGVSf3cWH",
              "title": "kahverengi"
            },
            "owner": "Vb6Ep6FPPVVasWQ7XuHf",
            "status": {
              "id": "ACUAtq75C1pknwgFYrBq",
              "title": "yeni gibi"
            },
            "category": {
              "title": "şort",
              "id": "ay5D4lTDr7ptj3bg3pQc"
            },
            "price": 167.92,
            "isOfferable": true,
            "imageUrl": "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
            "title": "Test Ürünü 24",
            "isSold": true,
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          },
          {
            "id": "DfLSFzPcYzWS0Ho3ksCB",
            "brand": {
              "id": "SPAp6xFJoTvQWDOdJIOp",
              "title": "mavi"
            },
            "color": {
              "id": "h1BgCxUOzFdYzQFJp0tC",
              "title": "lacivert"
            },
            "owner": "Vb6Ep6FPPVVasWQ7XuHf",
            "status": {
              "id": "ACUAtq75C1pknwgFYrBq",
              "title": "yeni gibi"
            },
            "category": {
              "id": "F2M107NYaLXAkpc6tNxp",
              "title": "mont"
            },
            "imageUrl": "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image6.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=TNgrEMNmmvG1neAcgYmxdlR44V%2B32qnbXUMJ7lZu98MgDmQn6gMgjv3SUqohw957hu%2Fq37RE3aCbl4BMVYv6ocwBsg9TBYbwsvF%2B%2FG1hDJyzkdIi5eAbSd8IfsCfv5QEti%2FQtjaeD2fQHKxZsyuNedZw0QJI8XLlJ1xruPoL%2FWBIJM0jqAaRIMIbET0UdaSEFjkWAY8fCMCMA6StQHOXmerJeH%2F%2BrIf7OiSaTcnl%2B560%2FGakWlkDWArMhz9NzmliygIigxrEdmqv1HnObMKGpAAipQt9RQskMqqyRPK3yOm4VCTUkH4GU0vI%2Fey5dwIC0eStdsQbWixPrhJSKE0oUw%3D%3D",
            "isSold": true,
            "isOfferable": true,
            "price": 285.93,
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "title": "Test Ürünü 5"
          },
          {
            "id": "EW3bZUYC5bVSUnNNXKvD",
            "brand": {
              "id": "7lGYUTwVdJm3Dspwy5Ps",
              "title": "pull&bear"
            },
            "color": {
              "title": "beyaz",
              "id": "C9HSCUyvqrVTXxl9yLTT"
            },
            "owner": "BDAln1VgsMt0jpM723np",
            "status": {
              "title": "yeni",
              "id": "8DBGbroOE2lNpIUIy9CZ"
            },
            "category": {
              "id": "E2RZNK56oVlPHx1rpMEd",
              "title": "pantolon"
            },
            "price": 102,
            "isOfferable": true,
            "title": "Test Ürün 101",
            "isSold": false,
            "imageUrl": "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image5.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731014400&Signature=Vo%2Bg%2FedPFdQ9XTECni9cIIVKe3D6vdZ1zrIgzJrrGW%2BpqXymrNtODNJyMhGI4jrFmW29tC%2Ft2aNTxaEREz6OBBhu6u5m02Y8a9%2FpfDshCn2Efwuplbl8xU2mRfOSME%2FCA5Lp9pftrBX0N%2BoLaIuAVuxbReQBCW249jYd6MNIiOtTayV%2BYE8zz6Qe8Eqsf7LimLKYw7QXbZLY1PYaGNWnyEnsJG8lbrCnEb0lYoCni15gbFUjosQ7hKLgfTjp9NMRXoG%2FT26jCMbc4aaEE%2FqXxMP8ng9jrkV%2BiitaXFVzgbINaJtobF%2FFZAWFSMIXTByL7yd9yHShsgFEnrdlXTo2sQ%3D%3D",
            "description": "Deneme"
          }] ,
      });
    })
    .catch((error) =>
      dispatch({ type: GET_RECEIVED_OFFERS_ERROR, payload: error })
    );
};
