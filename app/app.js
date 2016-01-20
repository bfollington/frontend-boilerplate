import 'babel-polyfill';

import ReactDOM from 'react-dom';
import TestComponent from './TestComponent';

ReactDOM.render(
    <TestComponent />,
    document.querySelector('#app')
);
