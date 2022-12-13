import { createContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import {
  notifyErrorDelete,
  notifyErrorPost,
  notifySucessDelete,
  notifySucessPost,
} from "../../components/Toastify";
import { UserContext } from "../UserContext";
import { useContext } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { setRenderTec, renderTec, setShowModal, renderId, setShowModalAdd } =
    useContext(UserContext);
  const createTecProfile = async (body) => {
    const token = JSON.parse(localStorage.getItem("data"));

    try {
      const response = await api.post("/users/techs", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderTec([...renderTec, response.data]);
      setShowModal(false);
      notifySucessPost();
    } catch (error) {
      notifyErrorPost();
      console.log(error);
    }
  };

  const deleteTecProfile = async (id) => {
    const token = JSON.parse(localStorage.getItem("data"));

    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setShowModalAdd(false);
      setRenderTec(renderTec.filter((elem) => elem.id !== id));
      notifySucessDelete();
    } catch (error) {
      notifyErrorDelete();
      console.log(error);
    }
  };
  const attTec = async (body, id) => {
    const token = JSON.parse(localStorage.getItem("data"));

    try {
      const response = await api.put(`/users/techs/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRenderTec([
        ...renderTec.filter((elem) => elem.id !== id),
        response.data,
      ]);
      setShowModalAdd(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTec = () => {
    deleteTecProfile(renderId);
  };
  return (
    <TechContext.Provider value={{ createTecProfile, deleteTec, attTec }}>
      {children}
    </TechContext.Provider>
  );
};
