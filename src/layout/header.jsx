import S from "./header.module.scss";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Livros from "../pages/livros/livros";
import Filmes from "../pages/filmes/filmes";
import Series from "../pages/series/series";
import Inicio from "../pages/inicio/inicio";

function Header() {
  return (
    <BrowserRouter>
      <header>
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
        <Route path="/livros" element={<Livros />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Header;
