import { connect } from 'react-redux';
import MobileFilterWrapper from './MobileFilterWrapper';
import { clearFilter, applyFilter } from '../../../app/redux/actions';

const mapStateToProps = (state: any) => {
    return {
        isFilterShown: state.app.isFilterShown,
    }
}

const mapDispatchToProps = {
    clearFilter,
    applyFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileFilterWrapper);