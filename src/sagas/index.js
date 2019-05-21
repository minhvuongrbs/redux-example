import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios'
import {receivedFeedback} from '../actions'
const rootSaga = function* rootSaga() {
    yield takeEvery('GET_FEEDBACK', workerGetFeedback);
}

function fetchFeedback() {
    return axios({
        method: "GET",
        url: "https://api.welcomerobot.t.s2.siouxdev.com/wr/v1/feedbacks"
    })
}
function* workerGetFeedback() {
    console.log("worker get feedback");
    try {
        const response = yield call(fetchFeedback);
        const data = response.data.data;
        yield put(receivedFeedback(data));
        console.log(data[0].comment);
    } catch (error) {
        console.log("get error");
    }
}

export default rootSaga;