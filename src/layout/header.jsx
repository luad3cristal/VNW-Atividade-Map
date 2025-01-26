import S from "./header.module.scss";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Conteudo from "../pages/conteudo/conteudo";
import Inicio from "../pages/inicio/inicio";

import logo from "../assets/logo.png";

function Header() {
  return (
    <BrowserRouter>
      <header className={S.header}>
        <section className={S.logo}>
          <img src={logo} alt="logo do site" />
          <h2>my favorites</h2>
        </section>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
              <Link to="/livros">Livros</Link>
              <Link to="/filmes">Filmes</Link>
              <Link to="/series">Series</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livros" element={<Conteudo texto="livros" />} />
        <Route path="/filmes" element={<Conteudo texto="filmes" />} />
        <Route path="/series" element={<Conteudo texto="series" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Header;
