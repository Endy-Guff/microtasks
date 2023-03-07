import React from 'react';
import { Result_2 } from './Result/Result_2';
import s from './Task_2.module.css'



export function Task_2() {
    return (
        <>
            <h1>Условие задачи</h1>
            <p className={s.text}>Сделать универсальные кнопки фильтрации. Используя метод filter и useState отфильтровать массив:</p>
            <div className={s.code}>
                <pre>{`
                const [money, setMoney] = useState([
                    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
                    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
                    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
                    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
                    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
                    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
                    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
                    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
                  ])            
                `}
                </pre>
            </div>
            <h1>Решение</h1>
            <Result_2/>
            {/* РЕШЕНИЕ */}
        </>
    )
}