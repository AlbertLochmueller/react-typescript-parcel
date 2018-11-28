import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {style} from 'typestyle';
import cc from "classcat";
import {CounterButton} from './src/CounterButton';

const ROOT = document.querySelector('.container');

const styles = {
    // redColor: style({
    //     color: 'red',
    // }),
    // backGroundGreen: style({
    //     background: 'green'
    // })
};

ReactDOM.render(<div className={cc([styles.redColor,  styles.backGroundGreen])}><CounterButton/></div>, ROOT);
