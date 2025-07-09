import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import "./styles.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispacth] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand}
          {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationButton operation="/" dispatch={dispacth} />
      
      <DigitButton digit="1" dispatch={dispacth} />
      <DigitButton digit="2" dispatch={dispacth} />
      <DigitButton digit="3" dispatch={dispacth} />

      <OperationButton operation="*" dispatch={dispacth} />

      <DigitButton digit="4" dispatch={dispacth} />
      <DigitButton digit="5" dispatch={dispacth} />
      <DigitButton digit="6" dispatch={dispacth} />

      <OperationButton operation="+" dispatch={dispacth} />

      <DigitButton digit="7" dispatch={dispacth} />
      <DigitButton digit="8" dispatch={dispacth} />
      <DigitButton digit="9" dispatch={dispacth} />

      <OperationButton operation="-" dispatch={dispacth} />

      <DigitButton digit="." dispatch={dispacth} />
      <DigitButton digit="0" dispatch={dispacth} />
      

      <button className="span-two">=</button>
    </div>
  );
}

export default App;
