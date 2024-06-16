import {createContext, useState} from 'react';


//count를 통해 전역적으로 변수를 관리함 타입도 따로 지정가능
const CountContext = createContext({
    count: 0,
    plusCount: () => {
    },
});

interface Props {
    children: JSX.Element | JSX.Element[];
}

//부모객체로 씌우고 안에 useState로 pluscount함수를 작성해줌
const CountProvider = ({children}: Props): JSX.Element => {
    const [count, setCount] = useState(0);

    const plusCount = (): void => {
        setCount(count + 1);
    };

    return (
        <CountContext.Provider
            value={{
                count,
                plusCount,
            }}
        >
            {children}
        </CountContext.Provider>
    );
};

export {CountContext, CountProvider};
