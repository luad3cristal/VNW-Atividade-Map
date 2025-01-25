import S from "./livros.module.scss";

function Livros() {
  const livros = [
    {
      img: "https://m.media-amazon.com/images/I/81hcvy5khEL._AC_UF1000,1000_QL80_.jpg",
      alt: "livro Ensaio sobre a cegueira",
      titulo: "Ensaio sobre a cegueira",
      descrição:
        "Um motorista parado no sinal se descobre subitamente cego. É o primeiro caso de uma treva branca que logo se espalha incontrolavelmente. Resguardados em quarentena, os cegos se perceberão reduzidos à essência humana, numa verdadeira viagem às trevas. O Ensaio sobre a cegueira é a fantasia de um autor que nos faz lembrar a responsabilidade de ter olhos quando os outros os perderam. José Saramago nos dá, aqui, uma imagem aterradora e comovente de tempos sombrios, à beira de um novo milênio, impondo-se à companhia dos maiores visionários modernos, como Franz Kafka e Elias Canetti.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://m.media-amazon.com/images/I/61Sor5r12SL.jpg",
      alt: "livro Torto Arado",
      titulo: "Torto Arado",
      descrição:
        "Nas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó. Ocorre então um acidente. E para sempre suas vidas estarão ligadas ― a ponto de uma precisar ser a voz da outra. Numa trama conduzida com maestria e com uma prosa melodiosa, o romance conta uma história de vida e morte, de combate e redenção.",
      avaliação: "⭐⭐⭐⭐",
    },
    {
      img: "https://m.media-amazon.com/images/I/81BTkpMrLYL._AC_UF1000,1000_QL80_.jpg",
      alt: "livro Sapiens: Uma breve história da humanidade",
      titulo: "Sapiens: Uma breve história da humanidade",
      descrição:
        "O que possibilitou ao Homo sapiens subjugar as demais espécies? O que nos torna capazes das mais belas obras de arte, dos avanços científicos mais impensáveis e das mais horripilantes guerras? Nossa capacidade imaginativa. Somos a única espécie que acredita em coisas que não existem na natureza, como Estados, dinheiro e direitos humanos. Partindo dessa ideia, Yuval Noah Harari, doutor em história pela Universidade de Oxford, aborda em Sapiens a história da humanidade sob uma perspectiva inovadora.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://m.media-amazon.com/images/I/71DZv5+s67L._AC_UF1000,1000_QL80_.jpg",
      alt: "livro The Hate U Give",
      titulo: "The Hate U Give",
      descrição:
        "Sixteen-year-old Starr lives in two worlds: the poor neighbourhood where she was born and raised and her posh high school in the suburbs. The uneasy balance between them is shattered when Starr is the only witness to the fatal shooting of her unarmed best friend, Khalil, by a police officer. Now what Starr says could destroy her community. It could also get her killed. Inspired by the Black Lives Matter movement, this is a powerful and gripping novel about one girl's struggle for justice.",
      avaliação: "⭐⭐⭐⭐",
    },
    {
      img: "https://m.media-amazon.com/images/I/81KfUf8JkcL._AC_UF1000,1000_QL80_.jpg",
      alt: "livro O mundo de Sofia",
      titulo: "O mundo de Sofia",
      descrição:
        "Às vésperas de seu aniversário de quinze anos, Sofia Amundsen começa a receber bilhetes e cartões-postais bastante estranhos. Os bilhetes são anônimos e perguntam a Sofia quem é ela e de onde vem o mundo. Os postais são enviados do Líbano, por um major desconhecido, para uma certa Hilde Møller Knag, garota a quem Sofia também não conhece. O mistério dos bilhetes e dos postais é o ponto de partida deste romance fascinante, que vem conquistando milhões de leitores em todos os países e já vendeu mais de 1 milhão de exemplares só no Brasil. De capítulo em capítulo, de “lição” em “lição”, o leitor é convidado a percorrer toda a história da filosofia ocidental, ao mesmo tempo que se vê envolvido por um thriller que toma um rumo surpreendente.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <main className={S.main}>
      <h1>Meus livros favoritos</h1>

      <article>
        {livros.map((livro) => (
          <section key={livro.titulo} className={S.content_container}>
            <img src={livro.img} alt={livro.alt} />
            <div className={S.content_box}>
              <h2>{livro.titulo}</h2>
              <p>{livro.descrição}</p>
              <span>Avaliação: {livro.avaliação}</span>
            </div>
          </section>
        ))}
      </article>
    </main>
  );
}

export default Livros;
