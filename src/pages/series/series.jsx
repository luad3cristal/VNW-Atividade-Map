import S from "../livros/livros.module.scss";

function Series() {
  const series = [
    {
      img: "https://img.posterstore.com/zoom/wb0081-8thebigbangtheory-gang50x70.jpg",
      alt: "serie The big bang theory",
      titulo: "The big bang theory",
      descrição:
        "The Big Bang Theory é uma série de comédia que acompanha um grupo de amigos, em sua maioria físicos e engenheiros, que vivem em Pasadena, Califórnia. O contraste entre a inteligência e a paixão por ciência desses personagens com suas dificuldades em lidar com situações sociais mais simples é o motor da comédia da série.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://i.pinimg.com/736x/84/d3/a5/84d3a523c46458ba6f8ed0a1dee97288.jpg",
      alt: "serie Scorpion",
      titulo: "Scorpion",
      descrição:
        "Scorpion é uma série de drama e ação que acompanha um grupo de gênios, liderados por Walter O'Brien, um prodígio com um QI excepcional. Recrutados pelo governo, eles utilizam suas habilidades em matemática, física e tecnologia para resolver crises de alta complexidade que ameaçam a segurança nacional. A série combina momentos de alta tensão com humor, explorando as dinâmicas sociais e as dificuldades de um grupo de superdotados vivendo no mundo real.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BNjRlNjNlY2YtYzQxNS00ZTUzLTkwMTQtMjM0YjZlOWQwZmFkXkEyXkFqcGc@._V1_.jpg",
      alt: "serie Arrow",
      titulo: "Arrow",
      descrição:
        "Arrow é uma série de drama e ação que acompanha a jornada de Oliver Queen, um bilionário que, após sobreviver a um naufrágio em uma ilha remota, retorna à sua cidade natal e se torna um vigilante mascarado conhecido como Arqueiro Verde. Utilizando suas habilidades de combate e um arco e flecha, ele luta contra a corrupção e o crime organizado que assola sua cidade. A série explora temas como justiça, redenção e a dualidade entre o bem e o mal.",
      avaliação: "⭐⭐⭐⭐",
    },
    {
      img: "https://m.media-amazon.com/images/I/71vTmwA6j9L._AC_UF1000,1000_QL80_.jpg",
      alt: "serie A lenda de Korra",
      titulo: "A lenda de Korra",
      descrição:
        "A Lenda de Korra é uma série de animação que se passa no mesmo universo de Avatar: A Lenda de Aang. A história acompanha Korra, uma jovem Avatar que domina os elementos água, terra e fogo, enquanto busca dominar o ar e restaurar a harmonia ao mundo. A série explora temas como identidade, espiritualidade e a luta por um futuro melhor, em um mundo onde a tecnologia e a tradição coexistem.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://m.media-amazon.com/images/I/81UcD17TMrL._AC_UF1000,1000_QL80_.jpg",
      alt: "serie Black Mirror",
      titulo: "Black Mirror",
      descrição:
        "Black Mirror é uma série de antologia de ficção científica que explora as consequências da tecnologia na sociedade. Cada episódio apresenta uma história independente, mas todas compartilham um mesmo tema: o lado obscuro da inovação tecnológica e como ela pode afetar as relações humanas e a individualidade. A série utiliza a ficção científica para fazer reflexões sobre temas contemporâneos como privacidade, vigilância e inteligência artificial.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <main className={S.main}>
      <h1>Meus filmes favoritos</h1>

      <article>
        {series.map((serie) => (
          <section key={serie.titulo} className={S.content_container}>
            <img src={serie.img} alt={serie.alt} />
            <div className={S.content_box}>
              <h2>{serie.titulo}</h2>
              <p>{serie.descrição}</p>
              <span>Avaliação: {serie.avaliação}</span>
            </div>
          </section>
        ))}
      </article>
    </main>
  );
}

export default Series;
