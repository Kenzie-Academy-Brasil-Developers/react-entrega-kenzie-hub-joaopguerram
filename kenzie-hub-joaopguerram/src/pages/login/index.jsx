import { LoginStyle } from "./style";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const { stateIcon, handleForm, iconState, passState } =
    useContext(UserContext);

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <LoginStyle>
      <h1>Kenzie Hub</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <h2>Login</h2>

        <div className="positionInputText">
          <p>Email</p>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          <p className="pMessage">{errors.email?.message} </p>
        </div>
        <div className="positionIcon">
          <p>Senha</p>
          <input
            type={passState}
            placeholder="Digite sua senha"
            id="password"
            {...register("password")}
          />

          <div onClick={() => stateIcon()} className="iconColor">
            {iconState}
          </div>
        </div>
        <p className="pMessage">{errors.password?.message} </p>
        <Button type={"submit"}>Entrar</Button>
        <p className="pLogin">Ainda não possui uma conta?</p>
        <Link to="/register" className={"buttonRegister"}>
          Cadastre-se
        </Link>
      </form>
    </LoginStyle>
  );
};
export default Login;
