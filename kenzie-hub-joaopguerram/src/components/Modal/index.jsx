import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { Button, ButtonGrey } from "../Button";
import "react-toastify/dist/ReactToastify.css";
import { ModalStyle, ModalStyleTrash } from "./style";
import * as yup from "yup";
import { TechContext } from "../../contexts/TechContexts";

export function Modal({ name, nameLabel, statusSelect, onClick }) {
  const { createTechProfile } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ModalStyle>
      <form onSubmit={handleSubmit(createTechProfile)}>
        <div className="modalBox">
          <div className="positionIntro">
            <div className="positionModalHeader">
              <p className="registerTec">{name}</p>
              <p onClick={onClick} className="closeX">
                X
              </p>
            </div>
            <div className="positionForm">
              <label>{nameLabel}</label>
              <input type="text" {...register("title")} />
              <label>{statusSelect}</label>
              <select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <Button type={"submit"} onClick={onClick}>
                {" "}
                Cadastrar Tecnologia
              </Button>
            </div>
          </div>
        </div>
      </form>
    </ModalStyle>
  );
}

export function ModalTrash({
  name,
  nameLabel,
  statusSelect,
  onClick,
  value,
  valueStatus,
}) {
  const formSchema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: value,
      status: valueStatus,
    },
    resolver: yupResolver(formSchema),
  });

  const { renderId } = useContext(UserContext);
  const { deleteTec, attTec } = useContext(TechContext);

  return (
    <ModalStyleTrash>
      <form onSubmit={handleSubmit((body) => attTec(body, renderId))}>
        <div className="modalBox">
          <div className="positionIntro">
            <div className="positionModalHeader">
              <p className="registerTec">{name}</p>
              <p onClick={onClick} className="closeX">
                X
              </p>
            </div>
            <div className="positionForm">
              <label>{nameLabel}</label>
              <input disabled type="text" {...register("title")} />
              <label>{statusSelect}</label>
              <select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <div className="positionButton">
                <Button type={"submit"}>Salvar alterações</Button>
                <ButtonGrey
                  type={"button"}
                  onClick={deleteTec}
                  className="buttonGrey"
                >
                  Excluir
                </ButtonGrey>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ModalStyleTrash>
  );
}
