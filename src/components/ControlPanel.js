
import { AUTHOR } from '../constant/common';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Fab, TextField } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, addMessageWidthSaga, addMessageWidthThunk } from '../store/messages/action';

const ControlPanel = () => {
    const { chatId } = useParams();
    const [value, setValue] = useState("")
    const { name } = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const allMessages = useSelector(state => state.messages.messageList)
    const messages = allMessages?.[chatId]


    const handlInput = (event) => {
        setValue(event.target.value)
    }

    const handlButton = () => {
        if (value !== '') {
            const message = {
                text: value,
                author: name
            }
            dispatch(addMessage(chatId, message))
            // dispatch(addMessageWidthThunk(chatId, message))
            setValue('');
        }
    }



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