import {useContext} from 'react';
import {CountContext} from '../index';

export const CountLabel = () => {
    const {count} = useContext(CountContext); //number타입으로 가져옴
    // const value=useContext(CountContext); //매핑된게 없어서 다 가져옴
    return <div>{count}</div>;
};