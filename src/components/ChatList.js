import { Delete } from "@mui/icons-material";
import { Dialog, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { addChat, deleteChat } from '../store/chats/action'



const ChatList = () => {

    const [visible, setVisible] = useState(false)
    const [chatName, setChatName] = useState('')
    const dispatch = useDispatch()
    const chats = useSelector(state => state.chats.chatList)

    const handleOpen = () => setVisible(true)

    const handleChange = (event) => setChatName(event.target.value)

    const onAddChat = () => {
        dispatch(addChat(chatName))
        setChatName('')
        setVisible(false)
    }

    const removeChat = (index) => {
        dispatch(deleteChat(index))
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
            <div>
                {chats?.map((chat, index) => (
                    <div key={index}>
                        <Link to={`/chats/${chat.id}`} className='link'>
                            {chat.name}
                            <button onClick={() => removeChat(index)}><Delete /></button>
                        </Link>

                    </div>
                ))}
            </div >

            <button onClick={handleOpen}>Add Chat</button>
            <Dialog open={visible} onClose={() => setVisible(false)} color="success">
                <TextField value={chatName} onChange={handleChange} color="success" />
                <button onClick={onAddChat}>Submit</button>
            </Dialog>
        </>

    )
}
export default ChatList