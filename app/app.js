import 'babel-polyfill';

import ReactDOM from 'react-dom';
import React from 'react'; // eslint-disable-line
import TestComponent from './TestComponent';

ReactDOM.render(
    <TestComponent />,
    document.querySelector('#app')
);
