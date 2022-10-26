import React from 'react'

import {Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from "../pages/Cart"
import Product from '../pages/Product'
import Login from '../pages/Login'
const Routers = () => {
  return (
    <Routes>
      <Route path='/' exact component ={Home}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/Catalog/:slug' exact component ={Product}/>
      <Route path='/Catalog' exact component ={Catalog}/>
      <Route path='/cart' exact component ={Cart}/>
    </Routes>

  )
}

export default Routers