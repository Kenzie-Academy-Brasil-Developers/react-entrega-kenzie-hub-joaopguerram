import { ButtonStyle } from "./style";
import { ButtonStyleGrey } from "./style";

export default function Button({ children, className, type, onClick }) {
  return (
    <ButtonStyle onClick={onClick} className={className} type={type}>
      {" "}
      {children}
    </ButtonStyle>
  );
}
export function ButtonGrey({ children, className, onClick }) {
  return (
    <ButtonStyleGrey onClick={onClick} className={className} type="button">
      {" "}
      {children}
    </ButtonStyleGrey>
  );
}
