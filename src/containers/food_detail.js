import React, { Component } from 'react'
import { connect } from 'react-redux';

class FoodDetail extends Component{
    render() {
      return (
        <div>
          <img src={this.props.activeFood.image}/>
        </div>
      )
    }
}
const mapStateToProps= (state)=>{
  return {
    activeFood: state.activeFood
  }
}
let FoodDetailContainer = connect(mapStateToProps)(FoodDetail);
export default FoodDetailContainer;