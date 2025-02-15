import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AeroProducts from './AeroProducts'
import Description from './Description'
import Login from '../Pages/Login'
import CartPage from './CartPage'
import SellerProducts from './SellerProducts'
import EditProducts from './EditProducts'
import AddProducts from './AddProducts'
import ProductsPage from '../Pages/ProductsPage'
import PrivateAuthentication from './PrivateAuthentication'
import WishList from './WishList'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/productsPage' element={<ProductsPage/>}/>
        <Route path="/aeroProducts" element={<PrivateAuthentication><AeroProducts /></PrivateAuthentication>} />
        <Route path="/description/:id" element={<Description />} />
        <Route path='/editProducts/:id' element={<EditProducts/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path="/addProducts" element={<AddProducts />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/sellerProducts' element={<PrivateAuthentication> <SellerProducts/> </PrivateAuthentication>}/>
    </Routes>
  )
}

export default AllRoutes
