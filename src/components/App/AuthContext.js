import { createContext } from "react";
import initialState from "./model/initialState";

const AuthContext = createContext(initialState);

export default AuthContext;
