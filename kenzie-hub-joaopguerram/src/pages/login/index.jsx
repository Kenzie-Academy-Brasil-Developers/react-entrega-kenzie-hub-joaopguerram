import { LoginStyle } from "./style.js";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyErrorLogin, notifySucessLogin } from "../../components/Toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(schema) });
  const handleForm = async (user) => {
    try {
      const { data } = await axios.post(
        "https://kenziehub.herokuapp.com/sessions",
        user
      );
      notifySucessLogin();
      window.localStorage.clear();
      window.localStorage.setItem("data", JSON.stringify(data));

      setTimeout(() => {
        navigate("/home");
      }, 5000);
    } catch (err) {
      notifyErrorLogin();
      setError("password", {
        message: console.log(err.response.data),
      });
    }
  };
  const [passState, setPassState] = useState("password");
  const [iconState, setIconState] = useState(AiFillEye());
  function stateIcon() {
    if (passState === "password") {
      setPassState("text");
      setIconState(AiFillEyeInvisible());
    } else {
      setPassState("password");
      setIconState(AiFillEye());
    }
  }
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
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </LoginStyle>
  );
};
export default Login;
