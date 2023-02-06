import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Products from './components/Products'
import RegisterForm from './components/RegisterForm'

export default function App() {
const [dark, setDark] = useState(false)

const darkMode=()=>{
    if(dark){
      document.body.style.backgroundColor='white'
      setDark(false)
    }
    else {
      document.body.style.backgroundColor='black'
      setDark(true)
    }
}
  return (
    <Router>
      <div>
    <Header darkMode={darkMode} dark={dark}/>
      <Routes>
        <Route path='/' element={<Products dark={dark}/>}></Route>
        <Route path='/cart' element={<Cart dark={dark}/>} ></Route>
        <Route path='/register' element={<RegisterForm dark={dark}/>}></Route>

      </Routes>
      </div>
    </Router>
    )
}
