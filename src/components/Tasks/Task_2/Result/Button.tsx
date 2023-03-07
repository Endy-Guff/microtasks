import { type } from "os";
import React from "react";
import { currencyType } from "./Result_2";

type PropsType = {
    name: string,
    currency: string,
    currencyData: Array<currencyType>
    callBack: (currency: string, currencyData: Array<currencyType>)=>void
}


export function Button(props: PropsType){
    const callBackHandler = () =>{
        props.callBack(props.currency, props.currencyData)
    }

    return(
        <button onClick={callBackHandler}>
            {props.name}
        </button>
    )
}