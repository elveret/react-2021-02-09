import { DECREMENT, INCREMENT, CLEARAMOUNT } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const clearAmount = (id) => ({ type: CLEARAMOUNT, id });
