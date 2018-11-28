import * as React from 'react';
import useIterator from './useIterator';

export function CounterButton() {
    const iterator = useIterator();

    return (
        <div>
            <p>You clicked {iterator.count} times</p>
            <button onClick={() => iterator.iterate()}>
                Click me
            </button>
        </div>
    );
}


