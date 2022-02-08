import * as S from "./Button.styles";

interface IButtonProps {
  variant: string;
  type: "button" | "submit" | "reset" | undefined;
  title: string;
  onClick?: () => void;
}

export function Button({ variant, type, title, onClick }: IButtonProps) {
  return (
    <S.Button type={type} className={variant} onClick={onClick}>
      {title}
    </S.Button>
  );
}
