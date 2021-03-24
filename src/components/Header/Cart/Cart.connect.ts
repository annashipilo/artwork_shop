import { connect } from 'react-redux';
import Cart from './Cart';
import { clearCart, showCart } from '../../../app/redux/actions';

const mapStateToProps = (state: any) => {
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