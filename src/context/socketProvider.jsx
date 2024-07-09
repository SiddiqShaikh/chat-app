// src/SocketProvider.js
import React from "react";
import { SocketContext, socket } from "./socketContext";

const SocketProvider = ({ children }) => (
  <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
);

export default SocketProvider;
