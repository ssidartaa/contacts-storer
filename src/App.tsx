import { ToastContainer } from "react-toastify";

import LoginProvider from "./contexts/LoginContext";

import RoutesMain from "./routes";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <LoginProvider>
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
    </LoginProvider>
  );
};

export default App;
