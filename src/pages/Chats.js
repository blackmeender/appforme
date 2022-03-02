import { useState } from "react"
import { useParams } from "react-router-dom"
import { AUTHOR } from "../constant/common"
import Message from "../Message"
import NotFound from "./NotFound"


const initialChats = {
    id1: {
        name: 'Chat1',
        messages: [{ text: 'theFirstChat', author: AUTHOR.bot }]
    },
    id2: {
        name: 'Chat2',
        messages: [{ text: 'theSecondChat', author: AUTHOR.bot }]
    }
}

const Chats = () => {

    const [chats, setChats] = useState(initialChats)

    const { chatId } = useParams()

    if (!chats[chatId]) {
        return <NotFound />
    }
    return (
        <div>
            <MessageList messages={chats[chatId].messages} />
        </div>
    )
}

export default Chats