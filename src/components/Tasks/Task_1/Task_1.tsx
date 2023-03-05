import React from 'react';
import { Result_1 } from './Result/Result_1';
import s from './Task_1.module.css'



export function Task_1() {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
      ]
      

    return (
        <>
            <h1>Условие задачи</h1>
            <p className={s.text}>Отрисовать разметку, используя метод map и входные данные:</p>
            <div className={s.code}>
                <pre>{`
                const topCars = [
                {manufacturer:'BMW', model:'m5cs'},
                {manufacturer:'Mercedes', model:'e63s'},
                {manufacturer:'Audi', model:'rs6'}
                ]
                `}
                </pre>
            </div>
            <h1>Решение</h1>
            <Result_1 cars={topCars}/>
            {/* РЕШЕНИЕ */}
        </>
    )
}