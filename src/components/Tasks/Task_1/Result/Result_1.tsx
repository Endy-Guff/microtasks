import { type } from 'os';
import React from 'react';

type CarsType = {
    manufacturer: string,
    model: string
}

type PropsType = {
    cars: Array<CarsType>
}




export function Result_1(props: PropsType){
    return(
        <>
            {props.cars.map((item, index) =>{
                return(
                    <p>{index + 1}. {item.manufacturer} model:{item.model}</p>
                )
            })}
        </>
    )
}