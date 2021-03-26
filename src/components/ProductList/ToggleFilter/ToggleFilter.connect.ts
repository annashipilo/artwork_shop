import { connect } from 'react-redux';
import ToggleFilter from './ToggleFilter';
import { showFilter } from '../../../app/redux/actions';

// const mapStateToProps = (state: any) => {
//     return {
//         categories: state.app.categories,
//     }
// }

const mapDispatchToProps = {
    showFilter,
}

export default connect(null, mapDispatchToProps)(ToggleFilter);