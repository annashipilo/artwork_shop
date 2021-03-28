import { connect } from 'react-redux';
import AddToCart from './AddToCart';
import { addToCart } from '../../redux/actions';

const mapDispatchToProps = {
    addToCart,
}

export default connect(null, mapDispatchToProps)(AddToCart);