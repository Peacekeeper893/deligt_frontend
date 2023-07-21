import {useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import cartContext from '../store/cart-context';

const Button = (props) => {

  const cartCtx = useContext(cartContext)

  const numberOfCartItems = cartCtx.items.reduce((acc, item) =>  (acc + item.amount), 0);
  return (
    
      <button className='bg-white rounded-lg md:p-3 p-1' onClick={props.onClick}>
          <span><ShoppingCartIcon/></span>
          <span className='px-1'>Your Cart</span>
      <span className='px-1'>{ numberOfCartItems}</span>
      </button>
  )
}

export default Button