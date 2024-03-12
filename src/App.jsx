import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Signup from "./modules/Signup";
import Login from "./modules/Login";
import { useHistory } from "react-router-dom";
import { LOCALSTORAGE_USER_KEY } from "./constants";
import { toast } from "react-toastify";

function App() {
  const history = useHistory();
  function handleLogout() {
    localStorage.removeItem(LOCALSTORAGE_USER_KEY);
    toast("Çıkış başarılı, sonra görüşürüz.");

    setTimeout(() => {
      history.push("/giris-yap");
    }, 3000);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <header className="flex justify-between items-center">
        <div className="text-lime-500 text-xl">
          <NavLink className="p-4" activeClassName="font-bold" to="/">
            Kiwitter
          </NavLink>
        </div>
        <nav className="flex">
          <NavLink
            className="p-4 text-white"
            activeClassName="font-bold"
            to="/profilim"
          >
            Profilim
          </NavLink>
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
          <button className="p-4 text-white" onClick={handleLogout}>
            Çıkış Yap
          </button>
        </nav>
      </header>
      <main className="p-4 bg-white rounded-lg">
        <Switch>
          <Route path="/" exact>
            <h2>Anasayfa</h2>
            <p>Burada tüm akış görünecek</p>
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
