import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import { exampleAction } from '../store/profile/actions';
import { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
    const { showName, name } = useSelector(state => state)
    // const [dummy, setDummy] = useState()
    const dispatch = useDispatch()
    const toggleShowName = useCallback(() => {
        dispatch(exampleAction)
        // setDummy({})
    }, [dispatch])

    return (
        <div className='profile-wrapper'>
            <div className='links'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/profile' className='link'>Profile</Link>
                <Link to='/chats' className='link'>Chats</Link>

            </div>
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

            {showName && <div className='name-wrapper'>name: {name} </div>}
        </div>)
}

export default Profile