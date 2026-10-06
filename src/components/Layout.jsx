import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <div className="bg-pokemon bg-pikachu">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt=""
        />
      </div>

      <div className="bg-pokemon bg-bulbasaur">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt=""
        />
      </div>

      <div className="bg-pokemon bg-charmander">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          alt=""
        />
      </div>

      <div className="bg-pokemon bg-squirtle">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
          alt=""
        />
      </div>

      <div className="pokeball-decoration pokeball-one"></div>
      <div className="pokeball-decoration pokeball-two"></div>

      <header className="app-header">
        <Link to="/" className="app-title-link">
          <h1>PokéDex Mini</h1>
        </Link>
        <p className="subtitle">Gotta catch 'em all ✨</p>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;