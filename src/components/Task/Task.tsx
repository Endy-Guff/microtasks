import React from 'react';

type TaskPropsType = {
    inf: string
}

export function Task(props: TaskPropsType) {
    return (
        <>
            {props.inf}
        </>
    )
}