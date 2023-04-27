import React, {MouseEvent, useState} from 'react';
import {FilterType} from "./App";

type PropsType = {
    currentMoney: BanknotType[]
    OnClickFilterHandler: (name: FilterType) => void
}

type BanknotType = {
    banknots: string
    value: number
    number: string
}
export const NewComponent = (props: PropsType) => {
    return(
        <>
            <ul>
                {props.currentMoney.map((el, index) => {
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
                <button onClick={() => props.OnClickFilterHandler('All')}>All</button>
                <button onClick={() => props.OnClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => props.OnClickFilterHandler('Rubls')}>Rubls</button>
            </div>
        </>
    )
}
