import { CalculatorAction, CalculatorState } from "../App";
import { evaluate } from "../utils/utils";

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

      return {
        operator,
        leftOperand: rightOperand,
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
          ...state,
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
      if (operator == null || rightOperand == null || leftOperand == null)
        return state;

      return {
        rightOperand: evaluate(state).toString(),
        leftOperand: null,
        operator: null,
      };
    }
  }
}
