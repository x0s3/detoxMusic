import { connect } from 'react-redux';
import { actions } from '../modules/';
import Home from '../components/Home';

const fetchItunes = actions.fetchItunes;

const mapDispatchToProps = {
  fetchItunes: (data) => fetchItunes(data),
}

const mapStateToProps = (state) => ({
  music : state.music.music,
  lastFetch: state.music.lastFetch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);