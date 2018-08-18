import './reboot.css';
import './index.css';

import './modules/polyfills';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App/index';

ReactDOM.render(<App />, window.document.getElementById('root'));
