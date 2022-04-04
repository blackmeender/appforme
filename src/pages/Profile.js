import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import { changeName, exampleAction } from '../store/profile/actions';
import { useState } from 'react';
import { Checkbox, FormControlLabel, TextField, Fab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowUpward } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Profile = () => {
    const { showName, name } = useSelector(state => state.profile)
    // const [dummy, setDummy] = useState()
    const dispatch = useDispatch()
    const [value, setValue] = useState(name)

    const toggleShowName = useCallback(() => {
        dispatch(exampleAction)
        // setDummy({})
    }, [dispatch])

    const handleInput = (event) => {
        setValue(event.target.value)
    }

    const handlButton = () => {
        dispatch(changeName(value))
        toast.success('Name changed')
    }
    return (
        <div className='profile-wrapper'>
            <div className='links'>
                <Link className='link' to='/gists'> Gists </Link>
                <Link to='/' className='link'>Home</Link>
                <Link to='/profile' className='link'>Profile</Link>
                <Link to='/chats' className='link'>Chats</Link>

            </div>
            <ToastContainer />
            <h1>Profile</h1>


            <FormControlLabel
                control={
                    <Checkbox
                        name='showName'
                        checked={showName}
                        onChange={toggleShowName}

                        color="success"
                    />
                }
                label={'Click!'}
            />

            {showName && <div>
                <TextField
                    value={value}
                    onChange={handleInput}
                />

                <Fab color='success' onClick={handlButton}><ArrowUpward /></Fab>
            </div>}

        </div>)
}

export default Profile