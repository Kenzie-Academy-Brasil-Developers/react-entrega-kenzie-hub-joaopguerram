import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterPage } from "./style";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/TechContexts";
import { formSchema } from "../../Validors/schema.jsx";
import { UserContext } from "../../contexts/UserContext";

const RegisterUser = () => {
  const { onSubmitFunction } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <RegisterPage>
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
          <div className="messageInput">
            {errors.name && errors.name.message}
          </div>
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
          <div className="messageInput">{errors.bio && errors.bio.message}</div>
          <input
            type={"text"}
            placeholder={"Fale sobre você"}
            {...register("bio")}
          />
        </div>{" "}
        <div className="positionInputText">
          <p>Contato</p>
          <div className="messageInput">
            {errors.contact && errors.contact.message}
          </div>
          <input
            type={"text"}
            placeholder={"Digite seu contato"}
            {...register("contact")}
          />
        </div>
        <div className="positionInputText">
          <p>Selecionar módulo</p>
          <div className="messageInput">
            {errors.modulo && errors.modulo.message}
          </div>
          <select
            name="Selecione o módulo"
            id=""
            {...register("course_module")}
          >
            <option value="">Selecione o módulo</option>
            <option value="modulo 1">Modulo 1</option>
            <option value="modulo 2">Modulo 2</option>
            <option value="modulo 3">Modulo 3</option>
            <option value="modulo 4">Modulo 4</option>
            <option value="modulo 5">Modulo 5</option>
            <option value="modulo 6">Modulo 6</option>
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
    </RegisterPage>
  );
};
export default RegisterUser;
