import { Dispatch } from "react";
import { CalculatorAction } from "../App";

interface DigitButtonProps {
  digit: string;
  dispatch: Dispatch<CalculatorAction>;
}

export default function DigitButton({ digit, dispatch }: DigitButtonProps) {
  function handleClick() {
    dispatch({ type: "Add-digit", digit });
  }
  return <button onClick={handleClick}>{digit}</button>;
}
