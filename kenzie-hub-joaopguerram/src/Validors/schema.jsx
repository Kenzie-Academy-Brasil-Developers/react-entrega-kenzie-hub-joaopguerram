import * as yup from "yup";
const cellType = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;

const passwordType =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatório"),

  email: yup.string().required("Email Obrigatório").email("Email invalido"),

  password: yup
    .string()
    .matches(passwordType, {
      message:
        "Deve conter minimo de 8 caractéres, ter letra, número e ao menos um símbolo",
    })
    .required("Senha Obrigatória"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não correspondem"),

  bio: yup.string().required("Bio Obrigatória"),

  contact: yup
    .string()
    .required("Contato Obrigatório")
    .matches(cellType, { message: "Exemplo: 21 123456789" }),

  course_module: yup.string().required("Modulo Obrigatório"),
});
