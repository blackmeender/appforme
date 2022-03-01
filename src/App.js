import logo from './logo.svg';
import './App.css';
import Message from './Message';
import './Message.css';
import React, { useEffect, useState } from 'react';
import { AUTHOR } from './constant/common';
import { Fab, TextField } from '@mui/material';
import { Send, ArrowForwar, ArrowUpward } from '@mui/icons-material';



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
        }]), 1000)
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
            (<div className='message-field' key={index}>
              <div className='author'>{item.author}</div>
              <div className='message-text'>{item.text}</div>

            </div>)
            )}
          </div>
          <div className='control-place'>
            <TextField
              type={'text'}
              value={value}
              label='Введите сообщение'
              variant="standard"
              id="standard-basic"
              color="success"
              onChange={handlInput}
              autoFocus={true}
            />
            <Fab color='success' onClick={handlButton}><ArrowUpward /></Fab>
          </div>
        </div>
      </header >
    </div >
  );
}

export default App;
