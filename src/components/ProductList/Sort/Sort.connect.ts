import { connect } from 'react-redux';
import { RootState } from '../../../redux/store'; 
import Sort from './Sort';
import { changeSort } from '../../../redux/actions';

const mapStateToProps = (state: RootState) => {
    return {
        sort: state.app.sort,
    }
}

const mapDispatchToProps = {
    changeSort,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);