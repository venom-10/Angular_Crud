import { createAction, props } from '@ngrx/store';
import { userDetails } from '../models/userDetails.model';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const incrementByFive = createAction('[Counter Component incrementByFive', props<{ value:number}>());

export const storeUser = createAction('storeUser', props<{ data: userDetails }>())
export const check = createAction('check');