import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  //Add purchased items to local storage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

//Delete product's action
export const removeFromCart = (id) => async(dispatch, getState) => {
  dispatch({type: CART_REMOVE_ITEM, payload: id})
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

//Save shipping address action
export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

//Save payment method action
export const savePaymentMethod = (data) => async (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })
  localStorage.setItem('paymentMethod', JSON.stringify(data))
}