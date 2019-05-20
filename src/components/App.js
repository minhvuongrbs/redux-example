import React from 'react';
import './App.css';
import FoodDetailContainer from '../containers/food_detail';
import FoodListContainer from '../containers/food_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Food Store
      </header>
      <div className="food-content">
        <b> Food List:</b>
        <FoodListContainer />
        <b> Food Detail:</b>
        <FoodDetailContainer />
      </div>
      <div className= "feedback-content">
        <span>
          <b>Feedback content</b>
          <button >Get Feedbacks</button>
        </span>
        
      </div>
    </div>
  );
}

export default App;
