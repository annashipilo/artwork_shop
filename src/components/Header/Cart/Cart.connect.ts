import { connect } from 'react-redux';
import { RootState } from '../../../redux/store'; 
import Cart from './Cart';
import { clearCart, showCart } from '../../../redux/actions';

const mapStateToProps = (state: RootState) => {
    return {
      cart: state.app.cart,
      isCartShown: state.app.isCartShown,
    }
}

const mapDispatchToProps = {
    clearCart,
    showCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);