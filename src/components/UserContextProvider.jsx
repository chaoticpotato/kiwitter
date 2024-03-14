/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { LOCALSTORAGE_USER_KEY } from "./../constants";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

function checkToken() {
  const token = localStorage.getItem(LOCALSTORAGE_USER_KEY);

  if (token) {
    const userDecoded = jwtDecode(token);
    return userDecoded;
  } else {
    return null;
  }
}

export const UserContextProvider = ({ children }) => {
  // token varsa, tokendan user bilgisini almak
  // bunu burada bir state içine yazmak
  // bu user state ini Provider'a value olarak vermek
  const [user, setUser] = useState(checkToken());
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem(LOCALSTORAGE_USER_KEY);
    toast("Çıkış başarılı, sonra görüşürüz.");
    setUser(null);

    setTimeout(() => {
      history.push("/giris-yap");
    }, 3000);
  }

  function handleLogin(token) {
    localStorage.setItem(LOCALSTORAGE_USER_KEY, token);
    const userDecoded = jwtDecode(token);
    setUser(userDecoded);
    toast("Giriş başarılı, profiline yönlendiriyorum.");

    setTimeout(() => {
      history.push("/profilim");
    }, 3000);
  }

  console.log(user);

  return (
    <UserContext.Provider
      value={{ user, handleLogout, handleLogin, test: 123 }}
    >
      {children}
    </UserContext.Provider>
  );
};
