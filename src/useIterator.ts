import {useState} from 'react';

export default () => {
    const [count, setCount] = useState(0);

    function increaseValue() {
        setCount(count + 1)
    }

    return {
        count,
        iterate: increaseValue
    }
}
