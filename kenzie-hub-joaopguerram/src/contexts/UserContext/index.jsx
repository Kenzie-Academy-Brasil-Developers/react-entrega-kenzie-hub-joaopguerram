import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { notifyErrorLogin, notifySucessLogin } from "../../components/Toastify";
import { notifyError, notifySucess } from "../../components/Toastify";
import { api } from "../../services/api";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userHome, setUserHome] = useState(null);
  const [loadingHome, setLoadingHome] = useState(true);
  const [passState, setPassState] = useState("password");
  const [iconState, setIconState] = useState(AiFillEye());

  const navigate = useNavigate();

  const handleForm = async (user) => {
    try {
      const { data } = await api.post("/sessions", user);
      window.localStorage.clear();
      window.localStorage.setItem("data", JSON.stringify(data.token));
      notifySucessLogin();
      navigate("/home");
    } catch (err) {
      notifyErrorLogin();
    }
  };
  function stateIcon() {
    if (passState === "password") {
      setPassState("text");
      setIconState(AiFillEyeInvisible());
    } else {
      setPassState("password");
      setIconState(AiFillEye());
    }
  }
  const [renderTec, setRenderTec] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("data"));
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRenderTec(response.data.techs);
      })
      .catch((err) => console.log(err));
  }, []);
  const [renderStatus, setRenderStatus] = useState("");
  const [renderTitle, setRenderTitle] = useState("");
  const [renderId, setRenderId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const onSubmitFunction = async (body) => {
    try {
      const { data } = await api.post("/users", body);
      notifySucess();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err);
      notifyError();
    }
  };
  return (
    <UserContext.Provider
      value={{
        stateIcon,
        handleForm,
        iconState,
        passState,
        userHome,
        setRenderTec,
        setUserHome,
        renderTec,
        loadingHome,
        setLoadingHome,
        setRenderTitle,
        setRenderStatus,
        renderStatus,
        renderTitle,
        setShowModal,
        showModal,
        showModalAdd,
        setShowModalAdd,
        renderId,
        setRenderId,
        onSubmitFunction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
