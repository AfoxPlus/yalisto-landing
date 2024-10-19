import { lazy } from "react";
import ContactContent from "../../content/ContactContent.json";
import { useParams } from "react-router-dom";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Establishment = () => {
  const routeParams = useParams();
  console.log(routeParams)
  return (
    <Container>
      <ScrollToTop />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Establishment;
