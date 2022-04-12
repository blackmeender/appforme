import { ADD_MESSAGE, UPDATE_MESSAGES } from "./action"

const initialState = {
    messageList: {}
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const currentList = state.messageList[action.payload.chatId] || []
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: [
                        ...currentList,
                        {
                            ...action.payload.message,
                            id: `${action.payload.chatId}${currentList.length}`
                        }
                    ]
                }
            }

        case UPDATE_MESSAGES:
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: action.messages
                }
            }

        default:
            return state
    }
}

export default messagesReducer