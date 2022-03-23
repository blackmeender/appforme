import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import { AUTHOR } from '../constant/common';
import { ArrowUpward, Android, SentimentSatisfiedAlt } from '@mui/icons-material';


const MessageList = (props) => {
    const { messages } = props

    return (
        <div className='message-box'>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.success' }}>
                {messages?.map((item, index) =>
                (<ListItem key={index} >
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