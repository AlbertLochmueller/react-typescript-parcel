import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {CounterButton} from './src/CounterButton';

const ROOT = document.querySelector('.container');

const styles = {};

ReactDOM.render(<div><CounterButton/></div>, ROOT);
