import { connect } from 'react-redux';
import Products from './Products';
// import { initArtworks } from '../../app/redux/actions';

const mapStateToProps = (state: any) => {
    return {
        artworks: state.app.currentArtworks,
    }
}

// const mapDispatchToProps = {
//     initArtworks,
// }

export default connect(mapStateToProps)(Products);