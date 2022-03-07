import ChatList from "../components/ChatList"

const NotFound = (props) => {
    return (
        <div>
            <ChatList chats={props.chats} />
            <div>NotFound</div>
        </div>)
}

export default NotFound