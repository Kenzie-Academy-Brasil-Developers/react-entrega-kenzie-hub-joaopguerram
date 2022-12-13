import { toast } from "react-toastify";
export const notifySucess = () => {
  toast.success("Usuário Cadastrado com Sucesso!", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
export const notifyError = () => {
  toast.error("Algo deu errado com seu Cadastro :(", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
export const notifySucessLogin = () => {
  toast.success("Usuário Logado com Sucesso!", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
export const notifySucessDelete = () => {
  toast.success("Tecnologia Deletada com Sucesso!", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
export const notifyErrorDelete = () => {
  toast.error("Algo deu errado em deletar a tecnologia", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
export const notifySucessPost = () => {
  toast.success("Tecnologia Criada com Sucesso!", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
export const notifyErrorPost = () => {
  toast.error("Algo deu errado em criar a tecnologia", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
export const notifyErrorLogin = () => {
  toast.error("Algo deu errado com seu Login :(", {
    position: "bottom-right",
    toastId: "YES",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
