import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import counterSlice from "./counter-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

// redux native way to configure store
// import { createStore } from "redux";

// export const ACTION_TYPE = {
//   counter: {
//     increment: "increment",
//     decrement: "decrement",
//     increase: "increase",
//   },
//   showCounter: {
//     toggleCounter: "toggleCounter",
//   },
// };

// const counterReducer = (state = initialState, action) => {
//   let newState;
//   switch (action.type) {
//     case ACTION_TYPE.counter.increment:
//       newState = { ...state, counter: ++state.counter };
//       break;
//     case ACTION_TYPE.counter.decrement:
//       newState = { ...state, counter: --state.counter };
//       break;
//     case ACTION_TYPE.counter.increase:
//       newState = { ...state, counter: state.counter + action.value };
//       break;
//     case ACTION_TYPE.showCounter.toggleCounter:
//       newState = { ...state, showCounter: !state.showCounter };
//       break;
//     default:
//       newState = state;
//   }
//   return newState;
// };

// const store = createStore(counterReducer);
