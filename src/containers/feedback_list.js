import React, { Component } from 'react'
import { connect } from 'react-redux';

class FeedbackList extends Component {
  createListFeedback() {
    console.log("12341"+this.props.feedbacks[0]);
    // let feedbackItem = this.props.feedbacks.map(
    //   (eachFeedback) => {
    //     return <h1>{eachFeedback}</h1>
    //   });
    // return feedbackItem;
    return <p>data</p>
  }
  render() {
    const { results = [] } = this.props.feedbacks;
    return results.length
      ?<div>
        {this.createListFeedback()}
      </div>
    : <h1>loading...</h1>;
  }
}
const mapStateToProps = (state) => {
  return {
    feedbacks: state.feedbacks,
  }
}
let FeedbackListContainer = connect(mapStateToProps)(FeedbackList);
export default FeedbackListContainer;