import React from "react";

type ButtonProps ={
    name: string,
    callback: ()=>void
}



export const Button = (props: ButtonProps) =>{

    const onClickButtonHandler =() =>{
        props.callback()
    }

    return(
       <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}