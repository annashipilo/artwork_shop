import { connect } from 'react-redux';
import CartContent from './CartContent';
import { clearCart, showCart } from '../../../app/redux/actions';

const mapStateToProps = (state: any) => {
    return {
      cart: state.app.cart,
    }
}

const mapDispatchToProps = {
    clearCart,
    showCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContent);