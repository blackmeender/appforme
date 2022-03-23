import { Dialog, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { addChat } from '../store/chats/action'


const ChatList = () => {
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false)
    const [chatName, setChatName] = useState('')
    const dispatch = useDispatch()
    const { chats } = useSelector(state => state.chats.chatList)

    const handleOpen = () => setVisible(true)

    const handleChange = (event) => setChatName(event.target.value)

    const onAddChat = () => {
        dispatch(addChat(chatName))
        setChatName('')
        setVisible(false)
    }

    return (
        <>
            <div>
                {chats.map((id, index) => (
                    <div key={index}>
                        <Link to={`/chats/${chats.id}`} className='link'>
                            {chats.name}
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