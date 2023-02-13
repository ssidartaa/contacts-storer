import { ToastContainer } from "react-toastify";

import LoginProvider from "./contexts/LoginContext";
import ClientProvider from "./contexts/ClientContext";
import ContactProvider from "./contexts/ContactContext";
import RoutesMain from "./routes";

import "react-toastify/dist/ReactToastify.css";

import Global from "./styles";

const App = () => {
  return (
    <LoginProvider>
      <ClientProvider>
        <ContactProvider>
          <Global />
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
