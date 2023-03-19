import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Guest",
    email: "",
  },
});

export default UserContext;
