import { useParams } from "react-router-dom"
import NotFound from "./NotFound"
import MessageList from "../components/MessageList"
import ChatList from "../components/ChatList"
import ControlPanel from "../components/ControlPanel"
import { Routes, Route, Link } from 'react-router-dom';




const Chats = () => {
    return (
        <>

            <div className='work-space'>
                <div className="chat-list">
                    <ChatList />
                </div>
                <div>
                    <MessageList />
                    <ControlPanel />
                </div>

            </div>
        </>
    )
}

export default Chats