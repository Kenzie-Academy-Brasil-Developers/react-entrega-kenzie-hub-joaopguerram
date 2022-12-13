import { HomeStyle } from "./style";
import { api } from "../../services/api";
import { ButtonGrey } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { CgTrash } from "react-icons/cg";
import { Modal, ModalTrash } from "../../components/Modal";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from "react";

const Home = () => {
  const {
    userHome,
    setUserHome,
    loadingHome,
    setLoadingHome,
    renderTec,
    setRenderTitle,
    setRenderStatus,
    renderTitle,
    renderStatus,
    setShowModal,
    showModal,
    showModalAdd,
    setShowModalAdd,
    setRenderId,
    setRenderTec,
  } = useContext(UserContext);

  const modalShow = () => {
    if (showModal === false) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  const modalShowAdd = (item, name, status, id) => {
    if (showModalAdd === false) {
      setShowModalAdd(true);
    } else {
      setShowModalAdd(false);
    }
    name = item.title;
    status = item.status;
    id = item.id;
    setRenderTitle(name);
    setRenderStatus(status);
    setRenderId(id);
  };
  useEffect(() => {
    async function loadUser() {
      const token = JSON.parse(localStorage.getItem("data"));

      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRenderTec(data.techs);
        setUserHome(data);
      } catch (error) {
        localStorage.clear();
        navigate("/");
        console.log(error);
      } finally {
        setLoadingHome(false);
      }
    }
    loadUser();
  }, []);
  const navigate = useNavigate();
  const newData = () => {
    window.localStorage.clear();
    navigate("/");
  };
  if (loadingHome) {
    return null;
  }
  // const dataLocal = JSON.parse(localStorage.getItem("data"));
  const valueInput = (id) => {
    const itens = renderTec.find((item) => item.id === id);
    modalShowAdd(itens);
  };
  if (!!userHome) {
    return (
      <main>
        <HomeStyle>
          <header>
            <h1>Kenzie Hub</h1>
            <ButtonGrey
              type={"button"}
              onClick={newData}
              className={"styleHeaderButton"}
            >
              Sair
            </ButtonGrey>
          </header>
          <div className="divProfile">
            <h2>
              Olá,
              {userHome.name}
            </h2>
            <p className="pProfile">{userHome.course_module}</p>
          </div>
          <div className="positionTec">
            <p className="pTec">Tecnologias</p>
            <button className="sumIcon" onClick={() => modalShow()}>
              +
            </button>
          </div>
          <ul>
            {renderTec.length !== 0 ? (
              renderTec.map((item, index) => (
                <li key={index}>
                  <p className="pLiText">{item.title}</p>
                  <div className="positionTecTrash">
                    <p className="pLiLevel">{item.status}</p>
                    <CgTrash
                      onClick={() => valueInput(item.id, item)}
                      className="iconStyleTrash"
                    />
                  </div>
                </li>
              ))
            ) : (
              <p className="tecApp">Você não aprendeu nenhuma Tecnologia</p>
            )}
          </ul>
        </HomeStyle>
        {showModal === true ? (
          <Modal
            onClick={() => setShowModal(false)}
            name={"Cadastrar Tecnologia"}
            nameLabel={"Nome "}
            statusSelect={"Selecionar status"}
          ></Modal>
        ) : (
          ""
        )}
        {showModalAdd === true ? (
          <ModalTrash
            onClick={() => setShowModalAdd(false)}
            name={"Tecnologia Detalhes"}
            nameLabel={"Nome do Projeto"}
            statusSelect={"Status"}
            value={renderTitle}
            valueStatus={renderStatus}
          ></ModalTrash>
        ) : (
          ""
        )}
      </main>
    );
  }
};
export default Home;
