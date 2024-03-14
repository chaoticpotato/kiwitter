import { useContext } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Signup from "./modules/Signup";
import Login from "./modules/Login";
import PostList from "./components/PostList";

import { UserContext } from "./components/UserContextProvider";

function App() {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <div className="max-w-3xl mx-auto">
      <header className="flex justify-between items-center">
        <div className="text-lime-500 text-xl">
          <NavLink className="p-4" activeClassName="font-bold" to="/">
            Kiwitter
          </NavLink>
        </div>
        <nav className="flex">
          {user ? (
            <>
              <NavLink
                className="p-4 text-white"
                activeClassName="font-bold"
                to="/profilim"
              >
                {user.username}
              </NavLink>
              <button className="p-4 text-white" onClick={handleLogout}>
                Çıkış Yap
              </button>
            </>
          ) : (
            <>
              <NavLink
                className="p-4 text-white"
                activeClassName="font-bold"
                to="/giris-yap"
              >
                Giriş yap
              </NavLink>
              <NavLink
                className="p-4 text-white"
                activeClassName="font-bold"
                to="/kayit-ol"
              >
                Kayıt ol
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main className="p-4 bg-white rounded-lg">
        <Switch>
          <Route path="/" exact>
            <h2>Anasayfa</h2>
            <PostList />
          </Route>
          <Route path="/profilim">
            <h2>Profil</h2>
            <p>Kendi yazdığım twitler görünecek</p>
          </Route>
          <Route path="/giris-yap">
            <Login />
          </Route>
          <Route path="/kayit-ol">
            <Signup />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
