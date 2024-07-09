// src/socket.js
import { createContext } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:8000"; // Replace with your server URL

export const socket = io(SOCKET_URL, {
  reconnectionDelayMax: 10000,
});

export const SocketContext = createContext();
