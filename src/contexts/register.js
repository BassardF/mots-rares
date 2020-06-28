import * as React from "react";

export const RegisterContext = React.createContext({
  showRegisterModal: false,
  setShowRegisterModal: (boolean) => {},
  isRegister: false,
  setIsRegister: (boolean) => {},
});
