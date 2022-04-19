import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Chats from './Chats';
import NotFound from './NotFound';
import Gists from './Gists';
import React from 'react';
import Registration from './Registration'
import Login from './Login'
import RequireAuth from '../hocs/RequireAuth';

const Routers = () => {

    return (
        <div className="App">
            <header className="App-header">


                <Routes>
                    <Route path='/' exact element={<Home />} />

                    <Route path='/login' exact element={<Login />} />
                    <Route path='/registration' exact element={<Registration />} />
                    <Route element={<RequireAuth />}>
                        <Route path='/gists' element={<Gists />}></Route>
                        <Route path='/profile' exact element={<Profile />} />
                        <Route path='/chats/:chatId' exact element={<Chats />} />

                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </header >
        </div >
    )
}

export default Routers
