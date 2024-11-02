import { useState } from "react";
import { notification } from "antd";

interface IValues {
  name: string;
  email: string;
  phone: string;
  establishmentName: string;
  establishmentType: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  phone: "",
  establishmentName: "",
  establishmentType: ""
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = formState.values;
    console.log("HANDLE SUBMIT")
    console.log(values)
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    const url = "https://4qg2nayfoi.execute-api.us-east-1.amazonaws.com/prod/restaurant/partner";

    try {
      if (Object.values(errors).every((error) => error === "")) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          notification["error"]({
            message: "Error",
            description:
              "Hubo un error al enviar su mensaje, por favor intente nuevamente más tarde.",
          });
        } else {
          event.target.reset();
          setFormState(() => ({
            values: { ...initialValues },
            errors: { ...initialValues },
          }));

          notification["success"]({
            message: "Success",
            description: "¡Tu mensaje ha sido enviado!",
          });
        }
      }
    } catch (error) {
      notification["error"]({
        message: "Error",
        description: "No se pudo enviar el formulario. Inténtelo nuevamente más tarde.",
      });
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
