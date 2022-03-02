import './Message.css';

function Message(props) {
    return <div className="messageText">{props.newMessage}</div>
}

const messageList = (props) => {
    const { messages } = props
}

messageList.propTypes = {
    messages: PropTypes.arrayOf(
        propTypes.shape({
            text: PropTypes.string,
            author: PropTypes.string
        })
    )
}

export default Message;