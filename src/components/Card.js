import React from 'react'
import { connect } from 'react-redux'
import { AddCart } from '../actions'

export const Card=(props) => {
  return (
<div className="card container" style={{width: "18rem",backgroundColor:props.dark ? 'black' : 'white', border:props.dark ? '0.1px solid white' :'0.1px solid black'}} >
  <img src={props.image} style={{width:'186px',height:'280px', margin:'auto'}} className="card-img-top" alt="..."/>
  <div className="card-body" style={{color:props.dark? 'white': 'black'}}>
    <h5 className="card-title">{props.title}</h5>
    <h5 className="card-text">${props.price}</h5>

    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <button href="#" className="btn btn-primary" onClick={()=>props.AddCart(props.item)}>Add Cart</button>
  </div>
</div>   )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    AddCart:(item)=>dispatch(AddCart(item))
  }
}

export default connect(null,mapDispatchToProps)(Card)
