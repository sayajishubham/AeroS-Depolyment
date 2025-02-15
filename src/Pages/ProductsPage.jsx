import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div className="container">
      <h4 className='text-center my-4'>Welcome to Our Products Page!</h4>
      <p className='text-center'>Please choose a card below to continue:</p>
      <div className="flip-card mx-auto my-5" style={{ maxWidth: '300px' }}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title text-center py-4">
              <Link to={'/aeroProducts'} className='text-decoration-none text-light'>
                Are you a User?
              </Link>
            </p>
          </div>
          <div className="flip-card-back">
            <p className="title text-center py-4">
              <Link to={'/sellerProducts'} className='text-decoration-none text-light'>
                Are you a Seller?
              </Link>
            </p>
          </div>
        </div>
      </div>
      <p className='text-center'>
        Flip the card to select your role and navigate to the respective section.
      </p>
    </div>
  )
}

export default ProductsPage
