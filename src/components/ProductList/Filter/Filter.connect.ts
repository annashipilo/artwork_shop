import { connect } from 'react-redux';
import Filter from './Filter';
import { applyFilter } from '../../../app/redux/actions';

const mapStateToProps = (state: any) => {
    return {
        categories: state.app.categories,
        isFilterShown: state.app.isFilterShown,
    }
}

const mapDispatchToProps = {
    applyFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);