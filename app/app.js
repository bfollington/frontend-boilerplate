import 'babel-polyfill';

import ReactDOM from 'react-dom';
import React from 'react';
import TestComponent from './TestComponent';

ReactDOM.render(
    <TestComponent />,
    document.querySelector('#app')
);
