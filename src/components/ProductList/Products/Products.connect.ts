import { connect } from 'react-redux';
import { RootState } from '../../../redux/store'; 
import Products from './Products';

const mapStateToProps = (state: RootState) => {
    return {
        artworks: state.app.currentArtworks,
    }
}

export default connect(mapStateToProps)(Products);