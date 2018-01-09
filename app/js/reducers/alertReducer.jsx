import * as actionType from '../actions/ActionType';

const alertReducer = (state = { hidden: true, text: '', color:'primary' }, action) => {
  let newState;
  switch (action.type) {
    case actionType.SHOW_ALERT:
      return newState = {
        hidden: action.hidden,
        text: action.text,
        color: action.color
      };
    case actionType.HIDE_ALERT:
      return newState = {
        hidden: action.hidden,
        text: '',
        color: 'primary'
      };
    default:
      return state
  }
}

export default alertReducer;