import S from "./conteudo.module.scss";

function Conteudo({ texto }) {
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
      avaliação: "⭐⭐⭐⭐⭐",
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
        "Às vésperas de seu aniversário de quinze anos, Sofia Amundsen começa a receber bilhetes e cartões-postais bastante estranhos. Os bilhetes são anônimos e perguntam a Sofia quem é ela e de onde vem o mundo. Os postais são enviados do Líbano, por um major desconhecido, para uma certa Hilde Møller Knag, garota a quem Sofia também não conhece.  De capítulo em capítulo, de “lição” em “lição”, o leitor é convidado a percorrer toda a história da filosofia ocidental, ao mesmo tempo que se vê envolvido por um thriller que toma um rumo surpreendente.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
  ];

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

  const filmes = [
    {
      img: "https://br.web.img3.acsta.net/medias/nmedia/18/87/89/74/19962669.jpg",
      alt: "filme A princesa e o sapo",
      titulo: "A princesa e o sapo",
      descrição:
        "A Princesa e o Sapo é um filme de animação musical que reimagina o clássico conto de fadas. A história se passa na Nova Orleans dos anos 20 e acompanha Tiana, uma jovem determinada que sonha em abrir seu próprio restaurante. Após um beijo acidental, ela se transforma em uma rã e embarca em uma aventura mágica ao lado do príncipe Naveen, que também foi transformado em um anfíbio. Juntos, eles enfrentam desafios e descobrem o verdadeiro significado da felicidade.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://m.media-amazon.com/images/I/818JVooHpJL._AC_UF894,1000_QL80_.jpg",
      alt: "filme Capitão Fantástico",
      titulo: "Capitão Fantástico",
      descrição:
        "Capitão Fantástico é um drama que acompanha um pai dedicado, Ben, que decide criar seus seis filhos em uma floresta isolada, longe da civilização moderna. Ben os educa em casa, ensinando-lhes sobre sobrevivência, filosofia e a importância de questionar o status quo. Quando uma tragédia familiar os força a retornar à sociedade, a família precisa se adaptar a um mundo que eles mal conhecem.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Frozen_2_poster.jpg",
      alt: "filme Frozen 2",
      titulo: "Frozen 2",
      descrição:
        "Frozen 2 é uma continuação da animação de sucesso da Disney. A história se concentra em Elsa, a Rainha de Arendelle, que busca descobrir a origem de seus poderes e a voz que a chama de além das montanhas. Junto com Anna, Kristoff, Olaf e Sven, ela embarca em uma jornada épica para desvendar os mistérios de seu passado e proteger seu reino.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://static.wixstatic.com/media/5801fd_3ee4e2cc6c6142fa8570cbd29a3fd352~mv2.jpg/v1/fill/w_568,h_798,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5801fd_3ee4e2cc6c6142fa8570cbd29a3fd352~mv2.jpg",
      alt: "filme Escritores da Liberdade",
      titulo: "Escritores da Liberdade",
      descrição:
        "Escritores da Liberdade é um drama baseado em fatos reais que se passa em uma escola de Los Angeles com um alto índice de criminalidade. A professora Erin Gruwell inspira seus alunos, em sua maioria de minorias, a expressar seus sentimentos e experiências através da escrita. Através de seus diários, os alunos exploram temas como racismo, violência e esperança, encontrando uma voz e um propósito.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://ingresso-a.akamaihd.net/prd/img/movie/avatar-o-caminho-das-aguas/048d74f1-9e5e-4ade-8652-a9630106c935.jpg",
      alt: "filme Avatar 2",
      titulo: "Avatar 2",
      descrição:
        "Avatar 2 é uma continuação da épica aventura em Pandora. Jake Sully, agora totalmente integrado ao povo Na'vi, retorna com sua família para proteger seu lar. No entanto, novas ameaças surgem, e a família Sully precisa unir forças com outras clãs Na'vi para defender seu mundo.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
      alt: "filme Harry Potter",
      titulo: "Harry Potter - A saga",
      descrição:
        "Harry Potter é uma saga épica de fantasia que acompanha a vida de um jovem bruxo, Harry Potter, que descobre que é o único sobrevivente de um ataque mortal de Lord Voldemort. Harry é enviado para a Escola de Magia e Bruxaria de Hogwarts, onde faz amigos, enfrenta perigos e se prepara para a batalha final contra o Lorde das Trevas.",
      avaliação: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <main className={S.main}>
      {texto === "livros" || texto === "filmes" ? (
        <h1>Meus {texto} favoritos</h1>
      ) : (
        <h1>Minhas {texto} favoritas</h1>
      )}

      <article>
        {texto === "livros" &&
          livros.map((livro) => (
            <section key={livro.titulo} className={S.content_container}>
              <img src={livro.img} alt={livro.alt} />
              <div className={S.content_box}>
                <h2>{livro.titulo}</h2>
                <p>{livro.descrição}</p>
                <span>Avaliação: {livro.avaliação}</span>
              </div>
            </section>
          ))}
        {texto === "series" &&
          series.map((serie) => (
            <section key={serie.titulo} className={S.content_container}>
              <img src={serie.img} alt={serie.alt} />
              <div className={S.content_box}>
                <h2>{serie.titulo}</h2>
                <p>{serie.descrição}</p>
                <span>Avaliação: {serie.avaliação}</span>
              </div>
            </section>
          ))}
        {texto === "filmes" &&
          filmes.map((filme) => (
            <section key={filme.titulo} className={S.content_container}>
              <img src={filme.img} alt={filme.alt} />
              <div className={S.content_box}>
                <h2>{filme.titulo}</h2>
                <p>{filme.descrição}</p>
                <span>Avaliação: {filme.avaliação}</span>
              </div>
            </section>
          ))}
      </article>
    </main>
  );
}

export default Conteudo;
