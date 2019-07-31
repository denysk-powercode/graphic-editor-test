import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router';
import ErrorBoundary from 'components/common/ErrorBoundary';
import { configureStore } from 'store';
import App from 'App';
import IntlProvider from 'i18n/IntlProvider';
import createHistory from 'store/history';

import Theme from './theme';

const browserHistory = createHistory();

const { store, persistor } = configureStore({
  initialState: window.__PRELOADED_STATE__,
  middleware: [routerMiddleware(browserHistory)],
});
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={browserHistory}>
        <IntlProvider>
          <ErrorBoundary>
            <Theme>
              <App />
            </Theme>
          </ErrorBoundary>
        </IntlProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }

  if (!window.store) {
    window.store = store;
  }
}
