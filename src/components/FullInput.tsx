import { type } from "os";
import React, { ChangeEvent, useState } from "react";

type PropsType = {
    callback: (value: string) => void
}

export const FullInput = (props: PropsType) =>{

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.value)
    }

    const onClickHandler = () =>{
        props.callback(title)
        setTitle('')
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}