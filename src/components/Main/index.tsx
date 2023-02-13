import { useContext } from "react";

import { LoginContext } from "../../contexts/LoginContext";
import { ContactContext } from "../../contexts/ContactContext";

import Contact from "../Contact/";
import EmptyContactList from "../EmptyContactList";
import AddContact from "../AddContact";

import Container from "./style";

const Main = () => {
  const { contacts } = useContext(LoginContext);

  const { isAddContactVisible, setIsAddContactVisible } =
    useContext(ContactContext);

  return (
    <Container>
      <main>
        <section className="addContactOpenModalContainer">
          <button onClick={() => setIsAddContactVisible(true)}>
            Add Contact
          </button>
        </section>

        {isAddContactVisible && <AddContact />}

        <section className="contactsList">
          <h3>Contacts:</h3>

          {contacts!.length ? (
            <ul>
              {contacts!.map(
                ({ id, fullName, email, phoneNumber, createdAt }) => (
                  <Contact
                    key={id}
                    id={id}
                    fullName={fullName}
                    email={email}
                    phoneNumber={phoneNumber}
                    createdAt={createdAt}
                  />
                )
              )}
            </ul>
          ) : (
            <EmptyContactList />
          )}
        </section>
      </main>
    </Container>
  );
};

export default Main;
