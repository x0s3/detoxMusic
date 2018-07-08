import { connect } from 'react-redux';
import AudioPlayer from '../components/AudioPlayer';

const mapStateToProps = (state) => ({
  music : state.music.music
});

export default connect(mapStateToProps, null)(AudioPlayer);