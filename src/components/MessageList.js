import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import { AUTHOR } from '../constant/common';
import { ArrowUpward, Android, SentimentSatisfiedAlt } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom"
import { useEffect } from 'react';
import { getMassagesByChatIdWithFB } from '../store/middleware'

const MessageList = () => {

    const allMessages = useSelector(state => state.messages.messageList)
    const { chatId } = useParams()
    const messages = allMessages[chatId]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMassagesByChatIdWithFB(chatId))
    }, [chatId])


    return (
        <div className='message-box'>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.success' }}>
                {messages?.map((item) =>
                (<ListItem key={item.id} >
                    <ListItemAvatar>
                        <Avatar>{item.author === AUTHOR.bot ? <Android /> : <SentimentSatisfiedAlt />}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.text} secondary={item.author} />
                </ListItem>)
                )}

            </List>

        </div>
    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            author: PropTypes.string
        })
    )
}



export default MessageList