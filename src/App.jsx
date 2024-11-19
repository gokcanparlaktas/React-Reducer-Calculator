import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  screen,
  equals,
  add,
  clear,
  recall,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (event) => {
    dispatch(screen(event.target.value));
  };
  const handleOperation = (event) => {
    dispatch(changeOperation(event.target.value));
  };
  const handleClear = () => {
    dispatch(clearDisplay());
  };
  const handleEquals = () => {
    dispatch(equals());
  };
  const handleAdd = () => dispatch(add());
  const handleClr = () => dispatch(clear());
  const handleRecall = () => dispatch(recall());

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={handleAdd} />
              <CalcButton value={'MR'} onClick={handleRecall} />
              <CalcButton value={'MC'} onClick={handleClr} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={handleClick} />
              <CalcButton value={2} onClick={handleClick} />
              <CalcButton value={3} onClick={handleClick} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleClick} />
              <CalcButton value={5} onClick={handleClick} />
              <CalcButton value={6} onClick={handleClick} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleClick} />
              <CalcButton value={8} onClick={handleClick} />
              <CalcButton value={9} onClick={handleClick} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={handleOperation} />
              <CalcButton value={0} onClick={handleClick} />
              <CalcButton value={'-'} onClick={handleOperation} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={handleOperation} />
              <CalcButton value={'/'} onClick={handleOperation} />
              <CalcButton value={'CE'} onClick={handleClear} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={handleEquals} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
