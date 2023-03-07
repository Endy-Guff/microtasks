import { type } from 'os';
import React, { useState } from 'react';
import { Button } from './Button';

export type currencyType = {
    banknots: string,
    value: number,
    number: string
}
export function Result_2() {


    const defaultCurrency = [
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ];

    let [currencyData, setCurrency] = useState<currencyType[]>(defaultCurrency)

    let filteredCurrency = currencyData;

    function filterCurrency(currency: string){
        currencyData = defaultCurrency
        filteredCurrency = currencyData.filter(el =>{
            if(el.banknots !== currency) return false
            if(el.banknots === currency) return true
        })
        setCurrency(filteredCurrency)
    }


    const showCurrency = filteredCurrency.map((el, index) =>{
        return(
            <li key={index}>Валюта:{el.banknots}, Номинал:{el.value}, Номер:{el.number}</li>
        )
    })

    return (
        <>
            <ul>
                {showCurrency}
            </ul>
            <Button name='Dollars' currency='Dollars' callBack={filterCurrency} currencyData={currencyData}/>
            <Button name='RUBLS' currency='RUBLS' callBack={filterCurrency} currencyData={currencyData}/>
        </>
    )
}