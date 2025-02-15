import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext'; 
import { Container, Table } from 'react-bootstrap';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeItemFromCart, updateItemQuantity, getTotalPrice } = useContext(CartContext);

  const handleQuantityChange = (itemId, change) => {
    const newQuantity = Math.max(1, cart.find(item => item.id === itemId).quantity + change); 
    updateItemQuantity(itemId, newQuantity);
  };

  const handleQuantityBtn = {
    height:"30px",
    width:"30px",
    borderRadius:"20px",
    margin:"5px 10px",
    fontSize:"24px",
    outline:"none",
    lineHeight:"30px",
    border:"none",
    backgroundColor:"#2e3133",
    color:"white"
  }
  return (
    <div>
      {cart.length === 0 ? (
        <h3 className='text-center'>Your cart is empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
             <Container>
            <Table striped bordered hover responsive style={{textAlign:"center"}}>
            <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>{item.id}</td>
            <td><div>
                <img src={item.colors[0].image} height={100} width={100} alt="" />
              </div></td>
                <td> <h4>${item.price || 0} </h4> </td>
                <td> <button onClick={() => handleQuantityChange(item.id, -1)} style={{...handleQuantityBtn}}>-</button>
                <span>{item.quantity }</span>
                <button onClick={() => handleQuantityChange(item.id, 1)} style={{...handleQuantityBtn}}>+</button></td>
                <td><h4>${(item.price || 0) * (item.quantity || 0)}</h4> </td>
                <td> <button
                  onClick={() => removeItemFromCart(item.id)}
                  style={{border:"0",fontSize:"20px",color:"red",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}
                >
                 <RiDeleteBinLine />Delete
                </button></td>
          </tr>

          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </Container>
            </div>
          ))}
          <h2 className='text-center'>Total: ${getTotalPrice() || 0}</h2> 
        </>
       
      )}
       
    </div>
  );
};

export default CartPage;
