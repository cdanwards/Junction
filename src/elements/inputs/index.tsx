

export interface InputProps {
  className?: string;
  value?: string;
}

const Input = ({ className, value }: InputProps) => (
  <input type="text" value={value} width={value} className={className || ""} />
);

export default Input;
