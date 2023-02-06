import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import  thunkMiddleware  from "redux-thunk";
import thunk from 'redux-thunk'
import ShopApp from "../reducer";
console.log("reducer store: ",ShopApp.state)
const store=createStore(ShopApp,applyMiddleware(thunk));
export default store;