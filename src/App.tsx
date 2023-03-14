import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';

function App() {

  let [messages, setMessages] = useState([
    {message: 'messsage1'},
    {message: 'messsage2'},
    {message: 'messsage3'}
  ])

  const updateMessages = (value: string) =>{
    const newMessage = {message: value}
    setMessages([newMessage, ...messages])
  }

  let [title, setTitle] = useState('')
  console.log(title);

  const onClickButtonHandler = () =>{
    updateMessages(title)
    setTitle('')
  }
  

  return (
    <div className="App">
      {/* <FullInput callback={updateMessages} /> */}
      <Input title={title} setTitle={setTitle}/>
      <Button name='+' callback={onClickButtonHandler}/>
      {messages.map((el, index) =>{
        return <div key={index}>{el.message}</div>
      })}
    </div>
  );
}

export default App;
