import React, {MouseEvent, useState} from 'react';
import {NewComponent} from "./NewComponent";

export type FilterType = 'All' | 'Rubls' | 'Dollars'
function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubls', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubls', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubls', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money;
    if (filter === 'Dollars') {
        currentMoney = money.filter((el) => {
            return el.banknots === 'Dollars'
        })
    } else if (filter === 'Rubls') {
        currentMoney = money.filter((el) => {
            return el.banknots === 'Rubls'
        })
    }

    const OnClickFilterHandler = (name: FilterType) => {
        setFilter(name);
    }
    return (
        <NewComponent currentMoney={currentMoney} OnClickFilterHandler={OnClickFilterHandler}/>
    );
}

export default App;