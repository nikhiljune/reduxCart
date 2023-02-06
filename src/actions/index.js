import CallApi from "../api/index";
export const GET_ALL_PRODUCTS='GET_ALL_PRODUCTS';
export const ADD_CART='ADD_CART';
export const DELETE_CART='DELETE_CART';
export const INCREASE_QUANTITY='INCREASE_QUANTITY'
export const DECREASE_QUANTITY='DECREASE_QUANTITY'
export const UPDATE_CART='UPDATE_CART'
export const GET_NUMBER_CART='GET_NUMBER_CART'
export const SEARCH='SEARCH'

export const GetProducts=()=>{
    return (dispatch)=>{
        // return CallApi('/products','GET',null).then(res=>{
        //     dispatch(GetAllProducts(res.data))
        return fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>dispatch(GetAllProducts(json)))
        ;
    }
}

export function GetNumberCart(){
    return{
        type:'GET_NUMBER_CART'
    }
}

export function GetAllProducts(payload){
    return{
        type:'GET_ALL_PRODUCTS',
        payload
    }
}

export function AddCart(payload){
    return{
        type:'ADD_CART',
        payload
    }
}

export function UpdateCart(payload){
    return{
        type:'UPDATE_CART',
        payload
    }
}
export function DeleteCart(payload){
    return{
        type:'DELETE_CART',
        payload
    }
}

export function IncreaseQuantity(payload){
    return{
        type:'INCREASE_QUANTITY',
        payload
    }
}

export function DecreaseQuantity(payload){
    return{
        type:'DECREASE_QUANTITY',
        payload
    }
}

export function Search(payload){
    return{
        type:'SEARCH',
        payload
    }
}