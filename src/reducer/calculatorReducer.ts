import { CalculatorAction, CalculatorState } from "../App";
import { evaluate, type RemovesNullValue } from "../utils/utils";

export default function calculatorReducer(
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState {
  const { rightOperand, leftOperand, operator } = state;

  switch (action.type) {
    case "Add-digit": {
      const { digit } = action;
      if (digit === "0" && rightOperand === "0") return state;

      if (digit === "." && rightOperand?.includes(".")) return state;

      return { ...state, rightOperand: `${rightOperand || ""}${digit}` };
    }

    case "Choose-operation": {
      const { operator } = action;

      if (rightOperand === null) return state;

      let leftHandOperand: string | null = rightOperand;
      if (leftOperand !== null && operator !== null)
        leftHandOperand = evaluate(state as RemovesNullValue<CalculatorState>);

      return {
        operator,
        leftOperand: leftHandOperand,
        rightOperand: null,
      };
    }

    case "Clear": {
      return {
        rightOperand: null,
        leftOperand: null,
        operator: null,
      };
    }

    case "Delete-digit": {
      if (rightOperand === null && operator !== null)
        return {
          rightOperand: leftOperand,
          leftOperand: null,
          operator: null,
        };

      return {
        ...state,
        rightOperand: rightOperand?.slice(0, rightOperand.length - 1) || null,
      };
    }

    case "Evaluate": {
      if (operator === null || rightOperand === null || leftOperand === null)
        return state;

      return {
        rightOperand: evaluate(state as RemovesNullValue<CalculatorState>),
        leftOperand: null,
        operator: null,
      };
    }
  }
}
