import React, {useState} from 'react';

//state를 string으로 사용하는 예제
export const StateComponent1 = () => {
    const [message, setMessage] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setMessage(e.target.value);
    };

    return (
        <div>
            <input onChange={onChange}/>
            <p>{message}</p>
        </div>
    );
};
