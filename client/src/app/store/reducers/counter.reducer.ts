import { createReducer, on } from '@ngrx/store';
import { increment, decrement, check, reset, incrementByFive, storeUser, storeUserData } from '../action/counter.action';
import { userDetails } from '../models/userDetails.model';
import { data } from 'src/data';

export const initialState = 0;

// const _counterReducer = createReducer(
//   initialState,
//   on(increment, (state, action) => {
//     console.log('state=>', state, 'action=>', action);
//     return state + 1;
//   }),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0),
//   on(incrementByFive, (state, action) => {
//     console.log(action);
//     return state+action.value
//   })
// );

// export function counterReducer(state: any, action: any) {
//   return _counterReducer(state, action);
// }

export const userState:userDetails = {
} 

export const userReducer = createReducer(
  userState, 
  on(storeUser, (state, action) => {
    console.log(state, action.data);
    return action.data;
  }),
  on(check, (state, action) => {
    console.log(state);
    return state;
  })
)
export const userData:data[] = []
export const userDataReducer = createReducer(
  userData, 
  on(storeUserData, (state, action) => {
    return action.defaultUserData;
  }),
  on(check, (state, action) => {
    console.log('s', state);
    return state;
  })
)