import { TiContacts } from "react-icons/ti";

import Container from "./style";

const EmptyContactList = () => {
  return (
    <Container>
      <h4>You don't have anyone contact</h4>
      <TiContacts />
    </Container>
  );
};

export default EmptyContactList;
