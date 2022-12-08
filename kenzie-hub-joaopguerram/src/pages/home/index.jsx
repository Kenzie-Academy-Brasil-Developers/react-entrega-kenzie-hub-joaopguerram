import { HomeStyle } from "./style.js";
import { ButtonGrey } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const newData = () => {
    window.localStorage.clear();
    navigate("/");
  };
  const dataLocal = JSON.parse(localStorage.getItem("data"));
  return (
    <HomeStyle>
      <header>
        <h1>Kenzie Hub</h1>
        <ButtonGrey onClick={() => newData()} className={"styleHeaderButton"}>
          Sair
        </ButtonGrey>
      </header>
      <div className="divProfile">
        <h2>Olá, {dataLocal.user.name}</h2>
        <p className="pProfile">{dataLocal.user.course_module}</p>
      </div>
      <div className="divText">
        <p className="pText">Que pena! Estamos em desenvolvimento :( </p>
        <p className="pProfile">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </HomeStyle>
  );
};
export default Home;
