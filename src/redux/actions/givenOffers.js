import {
  GET_GIVEN_OFFERS_PENDING,
  GET_GIVEN_OFFERS_SUCCESS,
  GET_GIVEN_OFFERS_ERROR,
} from "../constants/givenOffers";
import axios from "axios";
import { getProductsApi } from "../../helpers/FakeDataApi";
export const getGivenOffers = () => (dispatch) => {
  dispatch({ type: GET_GIVEN_OFFERS_PENDING });
  axios
    .get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
    .then((response) => {
      dispatch({ type: GET_GIVEN_OFFERS_SUCCESS, payload: 
        [
          {
            "id": "0haL1HYI2Jmk8iK2o1Tv",
            "brand": {
              "id": "hoYzGqV0muhBQdltaadO",
              "title": "levis"
            },
            "color": {
              "id": "Y2HjiCtk04eaGVSf3cWH",
              "title": "kahverengi"
            },
            "owner": "zmeeZsk1sU6i1O2qSnK0",
            "status": {
              "id": "pejnzB7dQnqf9Z9xyfE0",
              "title": "eski"
            },
            "category": {
              "title": "kazak",
              "id": "rM65sYM4QAmLhAyJUpIY"
            },
            "isSold": true,
            "imageUrl": "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
            "price": 1333,
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "title": "test ürün2",
            "isOfferable": false
          },
          {
            "id": "3LA82AzBz9NGeEq4LZf7",
            "brand": {
              "id": "hoYzGqV0muhBQdltaadO",
              "title": "levis"
            },
            "color": {
              "id": "fIfLpqMGo27vAUuGP3ky",
              "title": "kırmızı"
            },
            "owner": "Vb6Ep6FPPVVasWQ7XuHf",
            "status": {
              "id": "ACUAtq75C1pknwgFYrBq",
              "title": "yeni gibi"
            },
            "category": {
              "title": "ayakkabı",
              "id": "vHdbZttbtnFsab3GjstF"
            },
            "price": 594.55,
            "isSold": true,
            "isOfferable": true,
            "title": "Test Ürünü 19",
            "imageUrl": "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          },
          {
            "id": "3iItaLRDn891Y8tlihWS",
            "brand": {
              "title": "lacoste",
              "id": "UecyKuxjf9zeA1sf1PD7"
            },
            "color": {
              "id": "Y2HjiCtk04eaGVSf3cWH",
              "title": "kahverengi"
            },
            "owner": "Vb6Ep6FPPVVasWQ7XuHf",
            "status": {
              "title": "yeni",
              "id": "8DBGbroOE2lNpIUIy9CZ"
            },
            "category": {
              "title": "gömlek",
              "id": "EAxL5ERqwiGzcnWQUpb5"
            },
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "imageUrl": "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image6.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=TNgrEMNmmvG1neAcgYmxdlR44V%2B32qnbXUMJ7lZu98MgDmQn6gMgjv3SUqohw957hu%2Fq37RE3aCbl4BMVYv6ocwBsg9TBYbwsvF%2B%2FG1hDJyzkdIi5eAbSd8IfsCfv5QEti%2FQtjaeD2fQHKxZsyuNedZw0QJI8XLlJ1xruPoL%2FWBIJM0jqAaRIMIbET0UdaSEFjkWAY8fCMCMA6StQHOXmerJeH%2F%2BrIf7OiSaTcnl%2B560%2FGakWlkDWArMhz9NzmliygIigxrEdmqv1HnObMKGpAAipQt9RQskMqqyRPK3yOm4VCTUkH4GU0vI%2Fey5dwIC0eStdsQbWixPrhJSKE0oUw%3D%3D",
            "isOfferable": true,
            "title": "Test Ürünü 10",
            "price": 229.36,
            "isSold": true
          },
          {
            "id": "53sRHS7AigOkNACR8EmH",
            "brand": {
              "id": "7lGYUTwVdJm3Dspwy5Ps",
              "title": "pull&bear"
            },
            "color": {
              "id": "k6eFVpYLsQtMH0nGg8U7",
              "title": "yeşil"
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
            "title": "Test Ürünü 12",
            "isOfferable": true,
            "price": 568.17,
            "isSold": true,
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            "imageUrl": "https://storage.googleapis.com/frontend-bootcamp-e9376.appspot.com/products/images/image8.png?GoogleAccessId=firebase-adminsdk-dli7s%40frontend-bootcamp-e9376.iam.gserviceaccount.com&Expires=16731003600&Signature=jRjlotLyUZ%2ByaobRc4JLxBjJuY6le3nOwdfMWOCaZvheUXYrPctfK2OwbU9nf8cw3VyjDxU20%2BW%2Bnn08F4gqrtHw79SH5ZAIfm9XnJRBUtvkE9oMYJg1uJV2c2zv%2BgfJfYkYPHAQdR3oAJKU0MovfV0LAH%2Fn1TE%2FeUbO63PcfZYK8C6bhgyWYg8h1hr8mkLH0kHZwVQzHyEINcr3Fj%2FOA39ofoNMo4yAK9n9%2FRtmvQzMtNhJUP8tbZ1U05CsTVOa18jCTmmV5L5xMTxsLvxlJx%2FhDtMQ2tBdT%2B%2F2%2FLoL35Po7F22Gipl%2Fw6OVzpk%2Fw6c8riRV10PHVveEqt6jSPltg%3D%3D"
          },] });
    })
    .catch((error) =>
      dispatch({ type: GET_GIVEN_OFFERS_ERROR, payload: error })
    );
};
