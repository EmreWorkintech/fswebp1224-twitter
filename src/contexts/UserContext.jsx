import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  const history = useHistory();

  function logIn(formData) {
    //login işlemi
    const URL = "https://dummyjson.com/auth/login";
    axios
      .post(URL, formData)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        toast.success(`Merhaba kullanıcı ${formData.email}`);
        history.push("/feed");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logOut() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
