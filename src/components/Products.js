import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { GetProducts } from '../actions'
import  Card  from './Card'
import Spinner from './Spinner'


const Products = (props) => {
  useEffect(() => {
    // console.log("Useeffect", GetProducts());
      props.GetProducts();
  },[])
  
  // console.log("reducer props",props);
  const {_products,dark,searchData,Carts}=props
// console.log("reducer products: " ,_products);
  if(searchData.length>0){
    return (

      <div className='row my-3'>

            {
              searchData.map((item,index)=>{
              return ( <div className="col-md-3 my-3" key={index}>
              <Card image={item.image} title={item.title} price={item.price} item={item} quantity={item.quantity} dark={dark} />
          </div>)
              })
            }
      </div>
    )
  }

 else if (_products.length>0){
    return (

      <div className='row my-3'>

            {
              _products.map((item,index)=>{
              return ( <div className="col-md-3 my-3" key={index}>
              <Card image={item.image} title={item.title} price={item.price} item={item} dark={dark}
              carts={Carts}
              />
          </div>)
              })
            }
      </div>
    )
  } 
  else return(
    // <div className="container"> "Loading"</div>
    <Spinner/>
  )

  
}
const mapStatetoProps=state=>{
  // console.log("state",state);
  return{
    _products:state._todoProduct._products,
    searchData:state._todoProduct.searchData,
    Carts:state._todoProduct.Carts
  }
}
const  mapDispatchToProps = (dispatch) => {
  return{
    GetProducts:()=>dispatch(GetProducts())
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Products)
