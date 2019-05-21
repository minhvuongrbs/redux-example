import {RECEIVED_FEEDBACK} from '../actions/type'
export default (state={},action)=>{
    switch (action.type) {
        case RECEIVED_FEEDBACK:
            return action.payload;
        default:
            return {};
    }
}