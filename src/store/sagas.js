import { put, delay, takeLatest } from 'redux-saga/effects'
import { AUTHOR } from '../constant/common';
import { addMessage } from "./messages/action";

function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.payload.chatId, action.payload.message))

    if (action.payload.message.author !== AUTHOR.bot) {
        const botMessage = {
            author: AUTHOR.bot,
            text: 'HI!'
        }
        yield delay(2000)
        yield put(addMessage(action.payload.chatId, botMessage))
    }
}

function* mySaga() {
    yield takeLatest('ADD_MESSAGE_WIDTH_SAGA', onAddMessageWithSaga)
}

export default mySaga