import React, { useContext, useEffect, useState } from 'react';
import { WishListContext } from '../Context/WishListContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const WishList = () => {
  const { wishList, RemoveWishListProducts } = useContext(WishListContext);
  const [loading,setLoading] = useState(false)
  const [products, setProducts] = useState([]);

  // Fetch all product data
  const getData = () => {
    setLoading(true)
    axios.get('https://bk-aeropostale-json-server-1.onrender.com/products')
      .then((res) => setProducts(res.data),setLoading(false))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  // Filter the product data to match the items in the wishlist
  const wishlistProducts = wishList.map(wishItem =>
    products.find(product => product.id === wishItem.id)
  );

  return loading ?  <div className="loader-spin"><span></span><span></span><span></span><span></span></div>:(
    <div>
      <h1 className='text-center'>Wishlist</h1>
     <div className="container WishlistMain">
     {wishlistProducts.length > 0 ? (
        wishlistProducts.map(item => (
          item && (
            <div key={item.id} className='d-flex justify-content-evenly align-items-center p-2 flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row' style={{boxShadow: " rgba(0, 0, 0, 0.15) 0px 2px 8px",borderRadius:"20px",width:"80%",margin:"auto"}}>
              {/* Check if colors array exists and has at least one element */}
              {item.colors && item.colors.length > 0 && (
                <Link to={`/description/${item.id}`}><img src={item.colors[0].image} alt={item.title} style={{height:"300px",width:"250px",borderRadius:"20px"}}/></Link>
              )}
             <div className='text-center'>
             <h4 className='fw-bold'>{item.title}</h4>
             <h3>Price: ${item.price}</h3>
             <button onClick={() => RemoveWishListProducts(item.id)} className='text-light fw-bold bg-danger p-2 border rounded-2'>DELETE</button>
             </div>
            </div>
          )
        ))
      ) : (
        <h3 className='text-center w-100'>Your wishlist is empty.</h3>
      )}
     </div>
    </div>
  );
};

export default WishList;
