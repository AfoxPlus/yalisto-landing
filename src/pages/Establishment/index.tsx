import { lazy } from "react";
import PublishContent from "../../content/PublishContent.json";
import { useParams } from "react-router-dom";

const Contact = lazy(() => import("../../components/PublishForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Establishment = () => {
  const routeParams = useParams();
  console.log(routeParams)
  return (
    <Container>
      <ScrollToTop />
      <Contact
        title={PublishContent.title}
        content={PublishContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Establishment;
