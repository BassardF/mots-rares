import * as React from "react";

const initialState: {
  showWaitingListModal: boolean;
  setShowWaitingListModal: (b: boolean) => void;
} = {
  showWaitingListModal: false,
  setShowWaitingListModal: () => {},
};

export const WaitingListContext = React.createContext(initialState);
