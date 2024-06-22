interface Props {
  children: string;
  color?: "danger" | "primary" | "sucess" | "secondary";
  onClickButton: () => void;
}

const Button = ({ children, color = "primary", onClickButton }: Props) => {
  return (
    <div onClick={onClickButton} className={"btn btn-" + color}>
      {children}
    </div>
  );
};

export default Button;
