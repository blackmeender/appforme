import { AUTHOR } from "../../constant/common"

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const ADD_MESSAGE_WIDTH_SAGA = 'MESSAGES::ADD_MESSAGE_WIDTH_SAGA'
export const UPDATE_MESSAGES = 'MESSAGES::UPDATE_MESSAGES'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: message
    }
})

// export const addMessageWidthSaga = (chatId, message) => ({
//     type: ADD_MESSAGE_WIDTH_SAGA,
//     payload: {
//         chatId: chatId,
//         message: message
//     }
// })

// export const addMessageWidthThunk = (chatId, message) => (dispatch, getState) => {
//     dispatch(addMessage(chatId, message))

//     if (message.author !== AUTHOR.bot) {
//         const botMessage = {
//             author: AUTHOR.bot,
//             text: 'HI!'
//         }
//         setTimeout(() => {
//             dispatch(addMessage(chatId, botMessage))
//         }, 3000)
//     }
// }

export const updateMessages = (chatId) => ({
    type: UPDATE_MESSAGES,
    chatId,
    messages
})