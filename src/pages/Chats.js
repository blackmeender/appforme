import { useState } from "react"
import { useParams } from "react-router-dom"
import { AUTHOR } from "../constant/common"
import Message from "../Message"
import NotFound from "./NotFound"
import MessageList from "../components/MessageList"
import ChatList from "../components/ChatList"
import ControlPanel from "../components/ControlPanel"




const Chats = () => {

    const { chats, setChats } = props

    const { chatId } = useParams()

    if (!chats[chatId]) {
        return <NotFound />
    }
    return (
        <div className='work-space'>
            <div className="chat-list">
                <ChatList chats={chats} />
            </div>
            <div>
                <MessageList messages={chats[chatId].messages} />
                <ControlPanel chats={chats} setChats={(chats) => setChats(chats)} />
            </div>

        </div>
    )
}

export default Chats