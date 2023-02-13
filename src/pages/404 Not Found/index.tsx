import Container from "./style";

import { TbError404Off } from "react-icons/tb";

import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <Container>
      <section>
        <h1>Page "{location.pathname}" Not Found</h1>
        <TbError404Off />
      </section>
    </Container>
  );
};

export default NotFound;
