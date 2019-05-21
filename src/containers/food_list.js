import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectFood } from '../actions'

class FoodList extends Component {
  createFoodList() {
    let listItem = this.props.foods.map(
      (eachFood) => {
        return (
          <li key={eachFood.id} onClick={() => { this.props.selectFood(eachFood) }}>
            {eachFood.name}
          </li>
        );
      }
    );
    return listItem;
  }
  render() {
    return (
      <div>
        <ul>
          {this.createFoodList()}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    foods: state.foods
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectFood: selectFood }, dispatch)
}
let FoodListContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList);
export default FoodListContainer;