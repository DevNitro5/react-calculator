import { Dispatch } from "react";
import { CalculatorAction, Operator } from "../App";

interface OperationButtonProps {
  operator: Operator;
  dispatch: Dispatch<CalculatorAction>;
}

export default function OperationButton({
  operator,
  dispatch,
}: OperationButtonProps) {
  function handleClick() {
    dispatch({ type: "Choose-operation", operator });
  }

  return <button onClick={handleClick}>{operator}</button>;
}
