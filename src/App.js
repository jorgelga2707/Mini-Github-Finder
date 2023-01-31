import "./index.css";
import { useState } from "react";

const App =() => {
  const [search, setSearch] = useState("jorgelga2707");
  const [user, setUser] = useState({user:"jorgelga2707",});
  const fetchUser = async () => {
    const response = await fetch(`https://api.github.com/users/${search}`);
    const data = await response.json();
    setUser(data);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Buscador de Usuarios</h1>
        <div className="grid">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="ingrese el nombre de usuario"
          />
        </div>
        <div className="btn-container">
          <button className="btn-primary" onClick={fetchUser}>Buscar</button>
        </div>
        <article>
          <div className="container data-info">
            <img className="image-user" src={user.avatar_url} alt="avatar" />
            <h4>username: {user.login}</h4>
            <p>bio: {user.bio}</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
