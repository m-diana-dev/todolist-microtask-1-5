import React, {MouseEvent, useState} from 'react';

function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])
    return (
        <ul>
            {money.map((el, index)=>{
                index+=1;
                return(
                    <li key={index}>
                        <span>{el.banknots}</span>
                        <span>{el.value}</span>
                        <span>{el.number}</span>
                    </li>
                )
            })}
        </ul>
    );
}

export default App;