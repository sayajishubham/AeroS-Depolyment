import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Accordion } from "react-bootstrap";

const Card = ({ products }) => {
  // Proper initialization using both products and sellerProducts
  const initialColor =
    (products?.colors?.[0]) || {};
  
  const [currentColor, setCurrentColor] = useState(initialColor);

  const { addItemToCart } = useContext(CartContext);

  const handleColorChange = (el) => {
    setCurrentColor(el);
  };

  // Button styles
  const SizeBtn = {
    fontSize: "16px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    margin: "10px",
    border: "1px solid grey",
  };


  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center text-sm-center text-md-center text-lg-start text-xl-start text-xxl-start">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3 ">
                <img
                  src={currentColor?.image || "default-image-url"}
                  alt={products?.title || "Product Name"}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3">
                <img
                  src={currentColor?.image2 || "default-image-url"}
                  alt={products?.title || "Product Name"}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3 ">
                <img
                  src={currentColor?.image3 || "default-image-url"}
                  alt={products?.title || "Product Name"}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3 ">
                <img
                  src={currentColor?.image4 || "default-image-url"}
                  alt={products?.title || "Product Name"}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center text-sm-center text-md-center text-lg-start text-xl-start text-xxl-start">
            <h2>{products?.title || "Product Name"}</h2>
            <p className="fs-4">Price: ${products?.price || "Price"}</p>
            <strong className="fs-5">Category: {products?.category || "Category"}</strong>
            <strong>Colors</strong>
            <div className="color-options">
              {(products?.colors || []).map((el, index) => (
                <button
                  key={index}
                  style={{
                    backgroundColor: el.color,
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    border: "none",
                    margin: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
                  }}
                  aria-label={`Select color ${el.color}`}
                  onClick={() => handleColorChange(el)}
                ></button>
              ))}
            </div>

            <strong>Size:Select Size</strong>
              <button style={{ ...SizeBtn }}>XS</button>
              <button style={{ ...SizeBtn }}>S</button>
              <button style={{ ...SizeBtn }}>M</button>
              <button style={{ ...SizeBtn }}>L</button>
              <button style={{ ...SizeBtn }}>XL</button>
              <button style={{ ...SizeBtn }}>XXL</button>

            <p className="fs-5 p-2">{products?.description || "Description"}</p>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Product Details</Accordion.Header>
                <Accordion.Body>
                  {products?.details || "Details"}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div>
            <button onClick={() => addItemToCart(products)} style={{padding:"5px 50px",margin:"2%",fontSize:"24px",borderRadius:"50px",fontWeight:"500",backgroundColor:"grey",outline:"none",border:"none",color:"white"}}>
                  ADD TO BAG
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
