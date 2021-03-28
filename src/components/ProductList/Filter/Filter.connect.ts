import { connect } from 'react-redux';
import { RootState } from '../../../redux/store'; 
import Filter from './Filter';
import { applyFilter } from '../../../redux/actions';

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.app.categories,
        isFilterShown: state.app.isFilterShown,
        appliedFilters: state.app.appliedFilters,
    }
}

const mapDispatchToProps = {
    applyFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);