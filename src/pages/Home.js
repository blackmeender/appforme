import { Fab, Menu, MenuList, TextField } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <div className='links'>

                <Link className='link' to='/gists'> Gists </Link>
                <Link to='/' className='link'>Home</Link>
                <Link to='/profile' className='link'>Profile</Link>
                <Link to='/chats' className='link'>Chats</Link>
                <Link to='/registration' className='link'>Registration</Link>
                <Link to='/login' className='link'>Enter</Link>


                {/* <MenuList>
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
                </MenuList> */}
            </div>
            <h1>Home</h1>
        </>
    )

}
export default Home