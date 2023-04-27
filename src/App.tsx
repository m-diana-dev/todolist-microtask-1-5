import React, {MouseEvent, useState} from 'react';

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

    const [filter, setFilter] = useState('all')

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

    const OnClickFilterHandler = (name: string) => {
        setFilter(name);
    }
    return (
        <>
            <ul>
                {currentMoney.map((el, index) => {
                    index += 1;
                    return (
                        <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => OnClickFilterHandler('All')}>All</button>
                <button onClick={() => OnClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => OnClickFilterHandler('Rubls')}>Rubls</button>
            </div>
        </>
    );
}

export default App;