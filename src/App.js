import logo from './logo.svg';
import './App.css';
import Message from './Message';
import './Message.css';
import React, { useEffect, useState } from 'react';
import { AUTHOR } from './constant/common';



function App() {

  const [messageList, setMessageList] = useState([])
  const [value, setValue] = useState("")

  const handlInput = (event) => {
    setValue(event.target.value)
  }

  const handlButton = () => {
    setMessageList([...messageList, {
      text: value,
      author: AUTHOR.me
    }])
    setValue('')
  }

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === AUTHOR.me) {
      setTimeout(() =>
        setMessageList([...messageList, {
          text: 'hello',
          author: AUTHOR.bot
        }]), 2000)
    }

    return () => {
      clearTimeout()
    }
  }, [messageList])

  return (
    <div className="App">
      <header className="App-header">
        <Message newMessage='My message' />
        <div>
          <div className='message-box'>
            {messageList.map((item, index) =>
            (<div>
              <div className='message-text'>{item.text}</div>
              <div className='author'>{item.author}</div>
            </div>)
            )}
          </div>
          <input className='message-input' type={'text'} value={value} onChange={handlInput}></input>
          <button className='message-btn' onClick={handlButton}>GO!</button>
        </div>
      </header >
    </div >
  );
}

export default App;
