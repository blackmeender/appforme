import { GiteSharp } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL_PUBLICK } from '../constant/common';
import { getAllGists } from '../store/gists/action';

const gists = []
const Gists = () => {

    const { gists, request, error } = useSelector(state => state.gists)
    const dispatch = useDispatch()

    const requestGists = () => {
        dispatch(getAllGists())
    }

    useEffect(() => {

        requestGists()
    }, [])

    const renderGist = useCallback((gist) => {
        <li key={gist.id}>{gist.description || 'Netu'}</li>
    }, [])

    if (request) {
        return <CircularProgress color='success' />
    }

    return (
        <>
            <div className='links'>
                <Link className='link' to='/gists'> Gists </Link>
                <Link to='/' className='link'>Home</Link>
                <Link to='/profile' className='link'>Profile</Link>
                <Link to='/chats' className='link'>Chats</Link>
                <Link to='/registration' className='link'>Registration</Link>
                <Link to='/login' className='link'>Enter</Link>

            </div>
            <div>Gists</div>
            {error && (<div>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>

            </div>)}
            <ul>
                {gists.map(renderGist)}
            </ul>
        </>
    )
}

export default Gists