import S from "./inicio.module.scss";

function Inicio() {
  return (
    <main className={S.main}>
      <h1>My Favorites</h1>
      <p>
        Esta página foi feita como parte de um desafio proposto pelo Vai na Web
        em que eu pude praticar as minhas habilidades de React utilizando
        react-router-dom, função map, componentização e estilização com SASS.
      </p>
      <p>Sinta-se a vontade para explorar!</p>
    </main>
  );
}

export default Inicio;
