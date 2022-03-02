import './App.css';
import Message from './Message';
import './Message.css';
import React, { useEffect, useState } from 'react';
import { AUTHOR } from './constant/common';
import { Fab, Menu, TextField } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import NotFound from './pages/NotFound';


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
  const messageList = (props) => {
    const { messages } = props
  }

  messageList.propTypes = {
    messages: PropTypes.arrayOf(
      propTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
      })
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <Message newMessage='My message' />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/profile' exact element={<Profile />} />
          <Route path='/chats/:chatId' exact element={<Chats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Menu>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.success' }}>
            <ListItem>
              <Link to='/' className='link'>Home</Link>
            </ListItem>
            <ListItem >
              <Link to='/profile' className='link'>Profile</Link>
            </ListItem>
            <ListItem>
              <Link to='/chats' className='link'>Chats</Link>
            </ListItem>
          </List>
        </Menu>

        <div className='work-space'>
          <div>
            <div className='message-box'>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.success' }}>
                {messageList?.map((item, index) =>
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
