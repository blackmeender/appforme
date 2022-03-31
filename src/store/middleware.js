import { AUTHOR } from "../constant/common"
import { addMessage, ADD_MESSAGE } from "./messages/action"

const middleware = store => next => action => {

    if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTHOR.bot) {
        const botMessage = {
            author: AUTHOR.bot,
            text: 'HI!'
        }
        setTimeout(() => {
            store.dispatch(addMessage(action.payload.chatId, botMessage))
        }, 3000)
    }



    return next(action)
}

export default middleware