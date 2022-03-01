import './App.css';
import Message from './Message';
import './Message.css';
import React, { useEffect, useState } from 'react';
import { AUTHOR } from './constant/common';
import { Fab, TextField } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chats from './pages/Chats';


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
        <div className='work-space'>

          <div className='chat-list'>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.success' }}>
              <ListItem>
                Chat 1
              </ListItem>
              <ListItem>
                Chat 2
              </ListItem>
            </List>
          </div>

          <div>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/chats' element={<Chats />} />
            </Routes>

            <div className='message-box'>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.success' }}>
                {messageList.map((item, index) =>
                (<ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>{item.author}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.text} secondary={item.author} />
                </ListItem>)
                )}

              </List>
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

        </div>
      </header >
    </div >
  );
}

export default App;
