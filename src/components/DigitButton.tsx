interface DigitButtonProps {
  digit: string;
  dispatch: React.DispatchWithoutAction;
}

export default function DigitButton({ digit }: DigitButtonProps) {
  return <button>{digit}</button>;
}
