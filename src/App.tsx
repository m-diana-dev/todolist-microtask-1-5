import React, {MouseEvent, useState} from 'react';

function App() {
    let [a, setA] = useState(1);
    const OnClickHandler = () => {
        setA(++a);
        console.log(a);
    }
    const OnClickHandler2 = () => {
        setA(0);
        console.log(a);
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={OnClickHandler}>number</button>
            <button onClick={OnClickHandler2}>0</button>
        </div>
    );
}

export default App;