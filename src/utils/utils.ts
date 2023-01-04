import { CalculatorState } from "../App";

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

export function formatOperand(operand: string | null) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(+integer);
  return `${INTEGER_FORMATTER.format(+integer)}.${decimal}`;
}

export type RemovesNullValue<T> = {
  readonly [k in keyof T]: Exclude<T[k], null>;
};
export function evaluate({
  leftOperand,
  operator,
  rightOperand,
}: RemovesNullValue<CalculatorState>) {
  const prev = parseFloat(leftOperand || "");
  const current = parseFloat(rightOperand || "");

  if (isNaN(prev) || isNaN(current)) return "";

  switch (operator) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "*":
      return prev * current;
    case "÷":
      return prev / current;
  }
}
