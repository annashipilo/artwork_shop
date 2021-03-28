import { connect } from 'react-redux';
import { RootState } from '../../redux/store'; 
import ProductList from './ProductList';

const mapStateToProps = (state: RootState) => {
    return {
        isFilterShown: state.app.isFilterShown,
    }
}

export default connect(mapStateToProps)(ProductList);