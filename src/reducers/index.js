import FoodReducer from './food_reducer'
import ActiveFoodReducer from './active_food_reducer'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    foods: FoodReducer,
    activeFood: ActiveFoodReducer
});
export default rootReducer;