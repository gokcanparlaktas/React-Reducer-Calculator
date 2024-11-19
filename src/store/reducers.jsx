import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  EQUALS,
  SCREEN,
  ADD,
  CLEAR,
  RECALL,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  temp: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        total: 0,
        operation: action.payload,
        temp: state.total,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,

        total: 0,
      };

    case EQUALS:
      return {
        ...state,
        total: calculateResult(state.temp, state.total, state.operation),
      };

    case SCREEN:
      return {
        ...state,
        total:
          state.total == 0
            ? action.payload
            : state.total.toString() + action.payload.toString(),
      };
    case ADD:
      return {
        ...state,
        memory: state.total,
      };
    case CLEAR:
      return {
        ...state,
        memory: 0,
      };
    case RECALL:
      return {
        ...state,
        total: state.memory,
      };
    default:
      return state;
  }
};

export default reducer;
