import { Component } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter);

//   const toggleCounterHandler = () => {};

//   const incrementCounter = () => {
//     dispatch({ type: ACTION_TYPE.counter.increment });
//   };
//   const decrementCounter = () => {
//     dispatch({ type: ACTION_TYPE.counter.decrement });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementCounter}>Increment</button>
//         <button onClick={decrementCounter}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {
  toggleCounterHandler = () => {
    this.props.toggle();
  };

  incrementCounter = () => {
    this.props.increment();
  };
  decrementCounter = () => {
    this.props.decrement();
  };

  increaseCounter = () => {
    this.props.increase();
  };
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.showCounter && (
          <div className={classes.value}>{this.props.counter}</div>
        )}
        <div>
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
          <button onClick={this.increaseCounter}>Increase By 5</button>
        </div>

        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
const mapStateToProps = ({ counter }) => {
  return {
    counter: counter.counter,
    showCounter: counter.showCounter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    increase: () => dispatch(counterActions.increase(5)),
    toggle: () => dispatch(counterActions.toggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
