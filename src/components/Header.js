import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Link, } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { Search } from '../actions'



const Header = (props) => {

  const {Search, search} = props;

  return (
    <nav className={props.dark ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg navbar-light bg-light"} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Products</Link>
        <Link className="navbar-brand" to="/register">Register</Link>
{/* 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
         
        <div className="form-check form-switch mx-2">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.darkMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.dark && 'white' }}>Dark Mode</label>
        </div>
        
        </div>
        <ul className="navbar-nav mx-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/cart"> <i className="bi bi-cart" style={{ fontSize: '1.5rem' }}> {props.numberCart}</i>
              </Link>
            </li>

          </ul>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e=>Search(e.target.value)}/>
        
        {/* <button className="btn btn-outline-success" type="submit" onClick={()=>Search(search)}>Search</button> */}
      </form>
      </div>
    </nav>)
}

const mapStatetoProps = state => {
  return {
    numberCart: state._todoProduct.numberCart
  }
}

// const mapDispatchToProps=(dispatch)=>{
//   return{
//       Search:()=>dispatch(Search())
//   }
// }
function mapDispatchToProps(dispatch) {
  return bindActionCreators({Search}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Header)