import { ToastContainer } from "react-toastify";

import LoginProvider from "./contexts/LoginContext";
import ClientProvider from "./contexts/ClientContext";
import ContactProvider from "./contexts/ContactContext";
import RoutesMain from "./routes";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <LoginProvider>
      <ClientProvider>
        <ContactProvider>
          <RoutesMain />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ContactProvider>
      </ClientProvider>
    </LoginProvider>
  );
};

export default App;
