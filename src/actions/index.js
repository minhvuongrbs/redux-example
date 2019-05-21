import { SELECT_FOOD } from './type';
import { GET_FEEDBACK } from './type';
import {RECEIVED_FEEDBACK} from './type'
export const selectFood = (food) => {
    console.log("just clicked " + food.name);
    return {
        type: SELECT_FOOD,
        payload: food
    }
}
export const getFeedback = () => {
    console.log("action feedback");
    return {
        type: GET_FEEDBACK,
    }
}
export const receivedFeedback = (feedbacks)=>{
    console.log("received feedback");
    return {
        type: RECEIVED_FEEDBACK,
        payload: feedbacks
    }
    
}