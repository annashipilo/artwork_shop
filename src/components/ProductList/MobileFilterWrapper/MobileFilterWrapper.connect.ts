import { connect } from 'react-redux';
import MobileFilterWrapper from './MobileFilterWrapper';
import { clearFilter, showFilter } from '../../../app/redux/actions';

const mapDispatchToProps = {
    clearFilter,
    showFilter,
}

export default connect(null, mapDispatchToProps)(MobileFilterWrapper);