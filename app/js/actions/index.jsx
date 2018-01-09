import * as actionType from './ActionType';

export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
  payload: 1
});

export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});

export const showAlert = (text,color) => ({
  type: actionType.SHOW_ALERT,
  hidden: false,
  text,
  color
});

export const hideAlert = () => ({
  type: actionType.HIDE_ALERT,
  hidden: true
});