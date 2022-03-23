import { ADD_MESSAGE } from "./action"

const initialState = {
    messageList: {}
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const currentList = state.messageList[action.chatId] || []
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

        default:
            return state
    }
}

export default messagesReducer