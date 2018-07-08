import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Root} from './routes'
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}

export default App;
