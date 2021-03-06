import { combineReducers } from 'redux';
import coincapReducer from './coincapReducer';
import currencyReducer from './currencyReducer'
import redditReducer from "./redditReducer"
import newsReducer from "./newsReducer.js"
import navBarReducer from './navbarReducer.js'
import exchangeReducer from "./exchangeReducer.js"

const rootReducer = combineReducers({
  coincap: coincapReducer,
  currency: currencyReducer,
  redditNews: redditReducer,
  news: newsReducer,
  navBar: navBarReducer,
  exchange: exchangeReducer
})

export default rootReducer
