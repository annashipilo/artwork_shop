import { connect } from 'react-redux';
import FeaturedArtwork from './FeaturedArtwork';
import { initArtworks } from '../../app/redux/actions';

const mapStateToProps = (state: any) => {
    return {
      artwork: state.app.featuredArtwork,
    }
}

const mapDispatchToProps = {
    initArtworks,
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedArtwork);