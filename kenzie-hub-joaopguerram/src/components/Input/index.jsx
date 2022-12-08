import { InputForm } from "./style";

export default function Input({ type, placeholder, children }) {
  return <InputForm type={type} placeholder={placeholder}></InputForm>;
}
