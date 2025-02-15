import { useDispatch, useSelector } from 'react-redux';
import { 
  addItem, 
  removeItem, 
  updateQuantity,
  selectCart,
  selectCartCount,
  selectTotalPrice 
} from '../redux/slices/cartSlice';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const cartCount = useSelector(selectCartCount);
  const totalPrice = useSelector(selectTotalPrice);
  
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    dispatch(updateQuantity({ itemId, newQuantity }));
  };

  return (
    // Your JSX here
  );
}; 