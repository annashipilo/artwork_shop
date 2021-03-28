import { connect } from 'react-redux';
import ToggleFilter from './ToggleFilter';
import { showFilter } from '../../../redux/actions';

const mapDispatchToProps = {
    showFilter,
}

export default connect(null, mapDispatchToProps)(ToggleFilter);