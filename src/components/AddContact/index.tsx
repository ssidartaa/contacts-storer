import { useContext } from "react";

import { ContactContext } from "../../contexts/ContactContext";

import AddContactForm from "../AddContactForm";

const AddContact = () => {
  const { setIsAddContactVisible } = useContext(ContactContext);

  return (
    <div>
      <button onClick={() => setIsAddContactVisible(false)}>x</button>

      <AddContactForm />
    </div>
  );
};

export default AddContact;
