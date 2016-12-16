import React, { Component } from 'react';
import { Provider } from 'react-redux';
import QuesApp from './QuesApp';

import { Router, browserHistory } from 'react-router';

import Routes from './routes';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory} routes={Routes} />

        </div>
      </Provider>
    );
  }
}
