import { AUTHOR } from "../constant/common"
import { addMessage, ADD_MESSAGE } from "./messages/action"
import { getDatabase, ref, push, set, remove, onValue } from 'firebase/database'
import firebase from "../services/firebase"
import { chatListUpdate } from "./chats/action"
import { updateMessages } from "./messages/action"

const middleware = store => next => action => {

    if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTHOR.bot) {
        const botMessage = {
            author: AUTHOR.bot,
            text: 'HI!'
        }
        setTimeout(() => {
            store.dispatch(addMessage(action.payload.chatId, botMessage))
        }, 1000)
    }



    return next(action)
}

export const addChatWithFB = (name) => async () => {

    const db = getDatabase(firebase)

    const chatRef = ref(db, '/chats')
    const newChatRef = push(chatRef)
    set(newChatRef, { name: name }).then(res => {
        console.log(res)
    })
}

export const deleteChatWithFB = (id) => async () => {

    const db = getDatabase(firebase)
    const chatRef = ref(db, `/chats/${id}`)
    const messageRef = ref(db, `/messages/${id}`)
    remove(chatRef).then(res => {
        console.log('Chat Removed', res);
    })
    remove(messageRef).then(res => { console.log(2, res) })
}

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats`);
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({ id: item, name: data[item].name }));
        dispatch(chatListUpdate(chatArr));
    })

}

export const getMassagesByChatIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebase)
    const msgRef = ref(db, `/messages/${chatId}`)
    onValue(msgRef, (snapshot) => {
        const data = snapshot.val()
        const msg = data && Object.values(data)
        if (msg?.length > 0) {
            dispatch(updateMessages(chatId, msg))
        }
    })
}

export const addMessageWithFB = (chatId, message) => async () => {
    const db = getDatabase(firebase)
    const messageRef = ref(db, `/messages/${chatId}`)
    const newMessageRef = push(messageRef)
    set(newMessageRef, message).then((res) => {
        console.log('msg Added', res)
    })
}

export default middleware