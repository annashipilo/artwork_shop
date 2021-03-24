import { connect } from 'react-redux';
import Sort from './Sort';
import { changeSort } from '../../../app/redux/actions';

const mapStateToProps = (state: any) => {
    return {
        sort: state.app.sort,
    }
}

const mapDispatchToProps = {
    changeSort,
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);