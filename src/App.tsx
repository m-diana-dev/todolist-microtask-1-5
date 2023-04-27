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

    let currentMoney = money.filter((el) => {
        return el.banknots === 'Rubls'
    })

    const OnClickFilterHandler = (name: string) => {
        if (name === 'All') {
            console.log('All')
        } else if (name === 'Dollars') {
            console.log('Dollars')
        } else if (name === 'Rubls') {
            console.log('Rubls')
        }
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