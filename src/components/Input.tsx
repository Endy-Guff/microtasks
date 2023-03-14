import React, { ChangeEvent } from "react";

type InputProps = {
    title: string,
    setTitle: (value: string)=>void
}

export const Input = (props: InputProps) =>{

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        props.setTitle(e.currentTarget.value)
    }

    return(
        <input onChange={onChangeInputHandler} value={props.title} />
    )
}
