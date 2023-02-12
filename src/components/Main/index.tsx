import { useContext } from "react";

import { LoginContext } from "../../contexts/LoginContext";
import { ContactContext } from "../../contexts/ContactContext";

import Contact from "../Contact/";
import EmptyContactList from "../../EmptyContactList";
import AddContact from "../AddContact";

const Main = () => {
  const { contacts } = useContext(LoginContext);

  const { isAddContactVisible, setIsAddContactVisible } =
    useContext(ContactContext);

  return (
    <>
      <main>
        <section>
          <button onClick={() => setIsAddContactVisible(true)}>
            Add Contact
          </button>
        </section>

        <section>
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

      {isAddContactVisible && <AddContact />}
    </>
  );
};

export default Main;
