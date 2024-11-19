export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const EQUALS = 'EQUALS';
export const SCREEN = 'SCREEN';
export const ADD = 'ADD';
export const CLEAR = 'CLEAR';
export const RECALL = 'RECALL';

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
export const equals = () => {
  return { type: EQUALS };
};
export const screen = (number) => {
  return { type: SCREEN, payload: Number(number) };
};
export const add = () => {
  return { type: ADD };
};
export const clear = () => {
  return { type: CLEAR };
};
export const recall = () => {
  return { type: RECALL };
};
