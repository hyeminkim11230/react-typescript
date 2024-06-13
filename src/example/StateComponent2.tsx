import React, {useState} from 'react';

//state를 number로 사용하는 예제
export const StateComponent2 = () => {
    const [count, setCount] = useState(0);

    const sub = () => {
        setCount(count - 1);
    };
    const add = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={add}>+</button>
            <label>{count}</label>
            <button onClick={sub}>-</button>
        </div>
    );
};
