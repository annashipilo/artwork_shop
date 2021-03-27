import { connect } from 'react-redux';
import ProductList from './ProductList';

const mapStateToProps = (state: any) => {
    return {
        isFilterShown: state.app.isFilterShown,
    }
}

export default connect(mapStateToProps)(ProductList);