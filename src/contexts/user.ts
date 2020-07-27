import * as React from "react";

import User from "../models/User";

const initialState: {
  user?: User;
  setUser: (user: User) => void;
} = {
  user: undefined,
  setUser: () => {},
};

export const UserContext = React.createContext(initialState);
