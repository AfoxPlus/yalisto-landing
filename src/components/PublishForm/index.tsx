import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { PublishProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import { PublishContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Publish = ({ title, content, id, t }: PublishProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <PublishContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  label = "Nombre"
                  type="text"
                  name="name"
                  placeholder="Ej. Pedro"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                 label = "Email"
                  type="text"
                  name="email"
                  placeholder="Ej. pedro_123@gmail.com"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <Input
                    label = "Celular"
                  type="tel"
                  name="phone"
                  placeholder="Ej. 966212321"
                  value={values.phone || ""}
                  onChange={handleChange}
                />
                <ValidationType type="phone" />
              </Col>
              <Col span={24}>
                <Input
                 label = "Establecimiento"
                  type="text"
                  name="establishmentName"
                  placeholder="Ej. Kitchen"
                  value={values.establishmentName || ""}
                  onChange={handleChange}
                />
                <ValidationType type="establishmentName" />
              </Col>
              <Col span={24}>
                <Input
                 label = "Tipo de Establecimiento"
                  type="text"
                  name="establishmentType"
                  placeholder="Ej. Restaurante"
                  value={values.establishmentType || ""}
                  onChange={handleChange}
                />
                <ValidationType type="establishmentType" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Register")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </PublishContainer>
  );
};

export default withTranslation()(Publish);
