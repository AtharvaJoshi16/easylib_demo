export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="bg-red-300 text-red-800 font-semibold p-2"
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
export default Button;
