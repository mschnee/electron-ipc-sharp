/**
 * Main entry point - returns a thing.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './Components/App';

const __create = (function() {
    ReactDOM.render(React.createElement(App, {}), document.getElementById('app'));
})();

export default __create;