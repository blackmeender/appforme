
import { AUTHOR as AUTHORS } from '../constant/common';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { Fab, TextField } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

const ControlPanel = (props) => {
    const { chatId } = useParams();
    const { chats, setChats } = props
    const [value, setValue] = useState("")

    const handlInput = (event) => {
        setValue(event.target.value)
    }

    const handlButton = () => {
        if (value !== '') {
            const newObject = {
                ...chats,
                [chatId]: {
                    name: chats[chatId].name,
                    messages: [...chats[chatId].messages, {
                        text: value,
                        author: AUTHORS.me
                    }]
                }
            }
            setChats(newObject)
            setValue('');
        }
    }

    // useEffect(() => {
    //     if (messageList.length > 0 && messageList[messageList.length - 1].author === AUTHOR.me) {
    //         setTimeout(() =>
    //             setMessageList([...messageList, {
    //                 text: 'hello',
    //                 author: AUTHOR.bot
    //             }]), 1000)
    //     }

    //     return () => {
    //         clearTimeout()
    //     }
    // }, [messageList])

    return (
        <div className='control-place'>
            <TextField
                type={'text'}
                value={value}
                label='Введите сообщение'
                variant="standard"
                id="standard-basic"
                color="success"
                onChange={handlInput}
                autoFocus={true}
            />
            <Fab color='success' onClick={handlButton}><ArrowUpward /></Fab>
        </div>
    )
}

export default ControlPanel