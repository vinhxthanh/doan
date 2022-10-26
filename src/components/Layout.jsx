import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from "../pages/Cart"
import Product from '../pages/Product'
import Login from '../container/Login'


const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Catalog/:slug' exact element={<Product/>} />
        <Route path='/Catalog' exact element={<Catalog/>} />
        <Route path='/cart' exact element={<Cart/>} />
        <Route path='/login' exact element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  )
}
export default Layout