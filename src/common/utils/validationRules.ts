import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;
  console.log(values)
  if (!values.name) {
    errors.name = "El nombre es requerido";
  }
  if (!values.email) {
    errors.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phone) {
    errors.phone = "El celular es requerido";
  } else if (!/^\d{9}$/.test(values.phone)) {
    errors.phone = "El número de celular debe tener 9 dígitos";
  }
  if (!values.establishmentName) {
    errors.establishmentName = "El nombre del establecimiento es requerido";
  }
  if (!values.establishmentType) {
    errors.establishmentType = "El tipo de establecimiento es requerido";
  }
  return errors;
}
