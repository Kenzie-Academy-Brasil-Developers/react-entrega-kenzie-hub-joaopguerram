import RegisterStyle from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyErrorRegister,
  notifySucessRegister,
} from "../../components/Toastify/index.jsx";
import Button from "../../components/Button/index.jsx";

const RegisterUser = () => {
  const navigate = useNavigate();
  const cellType =
    /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
  const passwordType =
    /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email invalido"),
    password: yup
      .string()
      .matches(passwordType, {
        message:
          "Deve conter minimo de 6 caractéres, deve ter no minimo uma letra maiuscula e uma minuscula, deve ter um número e ao menos um caractere especial(! # @ $ % &)",
      })
      .required("Senha Obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não correspondem"),
    bio: yup.string().required("Bio Obrigatória"),
    contact: yup
      .string()
      .required("Contato Obrigatório")
      .matches(cellType, { message: "Exemplo: 21 99999-9999" }),
    course_module: yup.string().required("Modulo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = async (body) => {
    try {
      const { data } = await axios.post(
        "https://kenziehub.herokuapp.com/users",
        body
      );
      notifySucessRegister();
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (err) {
      console.log(err);
      notifyErrorRegister();
    }
  };

  return (
    <RegisterStyle>
      <header>
        <h1>Kenzie Hub</h1>
        <Link to="/" className={"styleHeaderButton"}>
          Voltar
        </Link>
      </header>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <h3>Rápido e grátis, vamos nessa</h3>
        <div className="positionInputText">
          <p>Nome</p>
          <div className="messageInput">{errors.name?.message}</div>
          <input
            className="inputRegister"
            type={"text"}
            placeholder={"Digite seu nome"}
            {...register("name")}
          />
        </div>
        <div className="positionInputText">
          <p>Email</p>
          <div className="messageInput">{errors.email?.message}</div>

          <input
            type={"email"}
            placeholder={"Digite seu e-mail"}
            {...register("email")}
          />
        </div>
        <div className="positionIcon">
          <p>Senha </p>
          <div className="messageInput">{errors.password?.message}</div>
          <input
            type={"password"}
            placeholder={"Digite sua senha"}
            {...register("password")}
          />
        </div>
        <div className="positionIcon">
          <p>Confirmar a senha</p>
          <div className="messageInput">{errors.confirmPassword?.message}</div>
          <input
            type={"password"}
            placeholder={"Confirme sua senha"}
            {...register("confirmPassword")}
          />
        </div>
        <div className="positionInputText">
          <p>Bio</p>
          <div className="messageInput">{errors.bio?.message}</div>
          <input
            type={"text"}
            placeholder={"Fale sobre você"}
            {...register("bio")}
          />
        </div>{" "}
        <div className="positionInputText">
          <p>Contato</p>
          <div className="messageInput">{errors.contact?.message}</div>
          <input
            type={"text"}
            placeholder={"Digite seu contato"}
            {...register("contact")}
          />
        </div>
        <div className="positionInputText">
          <p>Selecionar módulo</p>
          <div className="messageInput">{errors.modulo?.message}</div>
          <select
            name="Selecione o módulo"
            id=""
            {...register("course_module")}
          >
            <option value="">Selecione o módulo</option>
            <option value="modulo 1">Modulo 1 (Front-End Basico)</option>
            <option value="modulo 2">Modulo 2 (Front-End Intermediario)</option>
            <option value="modulo 3">Modulo 3 (Front-End Avançado)</option>
            <option value="modulo 4">Modulo 4 (Back-End Intermediario) </option>
            <option value="modulo 5">Modulo 5 (Back-End Avançado)</option>
            <option value="modulo 6">Modulo 6 (Full-Stack Jr.)</option>
          </select>
        </div>
        <Button type={"submit"}>Cadastrar</Button>
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
    </RegisterStyle>
  );
};
export default RegisterUser;
