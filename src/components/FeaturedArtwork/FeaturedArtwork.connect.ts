import { connect } from 'react-redux';
import { RootState } from '../../redux/store'; 
import FeaturedArtwork from './FeaturedArtwork';
import { initArtworks } from '../../redux/actions';

const mapStateToProps = (state: RootState) => {
    return {
      artwork: state.app.featuredArtwork,
    }
}

const mapDispatchToProps = {
    initArtworks,
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedArtwork);