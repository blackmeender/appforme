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
import Gists from './pages/Gists';



function App() {



  return (
    <div className="App">
      <header className="App-header">


        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/gists' element={<Gists />}></Route>
          <Route path='/profile' exact element={<Profile />} />
          <Route path='/chats/:chatId' exact element={<Chats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <Menu>
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
        </Menu> */}

      </header >
    </div >
  );
}

export default App;
