import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
  productDetailsReducer, 
  productListReducer, 
  productDeleteReducer, 
  productCreateReducer, 
  productUpdateReducer,
  productReviewCreateReducer
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'
import { 
  orderCreateReducer, 
  orderDetailsReducer, 
  orderListReducer, 
  orderPayReducer,
  orderListMyReducer,
  orderDeliverReducer
} from './reducers/orderReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderList: orderListReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  orderDeliver: orderDeliverReducer
})

//Get cart items from local storage
const cartItemsFromStorage = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems'))
: []

//Get the logged-in user information from local storage
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

//Get the user's delivery address information from local storage
const shippingAddressStorage = localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem('shippingAddress'))
: {}

//Initialize state value
const initialState = {
  cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressStorage },
  userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store