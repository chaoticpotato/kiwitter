import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="flex justify-between items-center">
        <div className="text-orange-900 text-xl">
          <NavLink className="p-4" activeClassName="font-bold" to="/">
            Kiwitter
          </NavLink>
        </div>
        <nav className="flex">
          <NavLink className="p-4" activeClassName="font-bold" to="/profilim">
            Profilim
          </NavLink>
          <NavLink className="p-4" activeClassName="font-bold" to="/giris-yap">
            Giriş yap
          </NavLink>
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
            <h2>Giriş yap</h2>
          </Route>
          <Route path="/kayit-ol">
            <h2>Kayıt ol</h2>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
