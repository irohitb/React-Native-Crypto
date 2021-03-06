import {
    NEWS_FETCHING_SUCESS,
    NEWS_FETCHING,
    NEWS_FETCHING_FAIL
} from '../actions/type.js';


const initialState = {
    DataFetching: true,
    DataSucess: [],
    DateError: []
  }
  

  export default function(state = initialState, action) {

    switch (action.type) {
      case NEWS_FETCHING:
      return {
        ...state,
        DataFetching: true
      }
      case  NEWS_FETCHING_SUCESS:
      return {
        ...state,
        DataSucess: action.payload,
        DataFetching: false
      }
      case NEWS_FETCHING_FAIL:
      return {
        ...state,
        DateError: action.payload,
        DataFetching: false
        }
        default:
        return state
      }
    }
    