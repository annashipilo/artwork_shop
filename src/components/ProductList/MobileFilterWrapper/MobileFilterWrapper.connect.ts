import { connect } from 'react-redux';
import MobileFilterWrapper from './MobileFilterWrapper';
import { clearFilter, showFilter } from '../../../redux/actions';

const mapDispatchToProps = {
    clearFilter,
    showFilter,
}

export default connect(null, mapDispatchToProps)(MobileFilterWrapper);