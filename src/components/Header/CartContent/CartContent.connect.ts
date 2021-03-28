import { connect } from 'react-redux';
import { RootState } from '../../../redux/store'; 
import CartContent from './CartContent';
import { clearCart, showCart } from '../../../redux/actions';

const mapStateToProps = (state: RootState) => {
    return {
      cart: state.app.cart,
    }
}

const mapDispatchToProps = {
    clearCart,
    showCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContent);