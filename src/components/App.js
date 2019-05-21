import './App.css';
import FoodDetailContainer from '../containers/food_detail';
import FoodListContainer from '../containers/food_list';
import FeedbackList from '../containers/feedback_list'
import { connect } from 'react-redux';
import React, { Component } from 'react'
import {getFeedback} from '../actions';
import { bindActionCreators } from 'redux';



class App extends Component {
  componentDidMount(){
    this.props.getFeedback()
  }
  render() {
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
        <div className="feedback-content">
          <span>
            <b>Feedback content</b>
            <button onClick={this.props.getFeedback}>Get Feedbacks</button>
          </span>
          <FeedbackList />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getFeedback: getFeedback }, dispatch)
}

export default connect(null,mapDispatchToProps)(App);
