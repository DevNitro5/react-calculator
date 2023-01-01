import { Reducer, useReducer } from "react";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import calculatorReducer from "./reducer/calculatorReducer";
import { formatOperand } from "./utils/utils";

export type Operator = "+" | "-" | "÷" | "*";

export interface CalculatorState {
  leftOperand: string | null;
  operator: Operator | null;
  rightOperand: string | null;
}
export type CalculatorAction =
  | {
      type: "Add-digit";
      digit: string;
    }
  | { type: "Choose-operation"; operator: Operator }
  | { type: "Clear" | "Delete-digit" | "Evaluate" };

function App() {
  const [calculator, dispatch] = useReducer<
    Reducer<CalculatorState, CalculatorAction>
  >(calculatorReducer, {
    leftOperand: null,
    operator: null,
    rightOperand: null,
  });

  const { leftOperand, operator, rightOperand } = calculator;

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(leftOperand)} {operator}
        </div>
        <div className="current-operand">{formatOperand(rightOperand)}</div>
      </div>
      <button className="span-two" onClick={() => dispatch({ type: "Clear" })}>
        AC
      </button>
      <button onClick={() => dispatch({ type: "Delete-digit" })}>DEL</button>
      <OperationButton operator="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operator="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operator="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operator="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: "Evaluate" })}
      >
        =
      </button>
    </div>
  );
}

export default App;
