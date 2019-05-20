import {SELECT_FOOD} from './type'
export const selectFood = (food) => {
    console.log("just clicked " +food.name);
    return {
        type: SELECT_FOOD,
        payload: food
    }
}