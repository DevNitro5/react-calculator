interface OperationButtonProps {
  operator: "+" | "-" | "÷" | "*";
  dispatch: React.DispatchWithoutAction;
}

export default function OperationButton({ operator }: OperationButtonProps) {
  return <button>{operator}</button>;
}
