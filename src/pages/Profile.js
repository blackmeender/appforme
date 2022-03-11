import { Routes, Route, Link } from 'react-router-dom';


const Profile = () => {
    return (
        <>
            <div className='links'>
                <Link to='/' className='link'>Home</Link>
                <Link to='/profile' className='link'>Profile</Link>
                <Link to='/chats' className='link'>Chats</Link>

            </div>
            <h1>Profile</h1>
        </>)
}

export default Profile