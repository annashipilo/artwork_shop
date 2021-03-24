import { connect } from 'react-redux';
import AddToCart from './AddToCart';
import { addToCart } from '../../app/redux/actions';

// const mapStateToProps = (state: any) => {
//     return {
//       cart: state.app.cart,
//     }
// }

const mapDispatchToProps = {
    addToCart,
}

export default connect(null, mapDispatchToProps)(AddToCart);