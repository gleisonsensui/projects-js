const quotes = [
  {
    id: 1,
    quote:
      "“Se em um dia de tristezas, tiveres de escolher entre o mundo e o amor… escolhas o amor, e com ele conquiste o mundo!”",
    author: "Albert Einstein 1879–1955",
  },
  {
    id: 2,
    quote:
      "“Mesmo assim — disse o Espantalho — vou pedir um cérebro em vez de um coração. Porque um burro, mesmo se tivesse um coração, não ia saber o que fazer com ele. — E eu vou ficar com o coração — respondeu o Lenhador de Lata. — Porque um cérebro não faz ninguém feliz, e a felicidade é a melhor coisa do mundo.”",
    author: "L. Frank Baum, livro The Wonderful Wizard of Oz",
  },
  {
    id: 3,
    quote:
      "“A idade apropriada para casamento é de cerca de dezoito anos para as meninas e trinta e sete para os homens.”",
    author: "Aristoteles, livro Política",
  },
  {
    id: 4,
    quote:
      "“A educação é que tira a pessoa da miséria e não a doutrinação. O que tira a juventude da miséria, ou o homem ou a mulher, é o conhecimento. Não são programas sociais, que em alguns casos são necessários, mas não podemos crescer nisso.”",
    author: "Jair Bolsonaro 38º Presidente do Brasil 1955",
  },
  {
    id: 5,
    quote:
      "“A certeza é fatal. O que me encanta é a incerteza. A neblina torna as coisas maravilhosas.”",
    author:
      "Oscar Wilde Escritor, poeta e dramaturgo britânico de origem irlandesa 1854–1900",
  },
  {
    id: 6,
    quote:
      "“O erro é uma coisa positiva, porque, por ele, chega-se a descobrir a verdade.”",
    author: "Fiódor Dostoiévski, livro Crime e Castigo",
  },
  {
    id: 7,
    quote: "“A leitura é para a mente o que o exercício é para o corpo.”",
    author: "Richard Steele 1672–1729",
  },
  {
    id: 8,
    quote:
      "“Não é que eu seja louco, é apenas que minha cabeça é diferente das de vocês.”",
    author: "Diógenes de Sinope -404–-322 a.C.",
  },
  {
    id: 9,
    quote:
      "“O trabalho espanta os três grandes males: o vício, a pobreza e o tédio”",
    author: "Voltaire, livro Cândido, ou O Otimismo",
  },
  {
    id: 10,
    quote: "“Não existe amor mais sincero do que aquele pela comida.”",
    author: "George Bernard Shaw 1856–1950",
  },
  {
    id: 11,
    quote:
      "“A amizade é assim, tem sempre dois lados e devemos realçar o melhor.”",
    author: "Pepetela escritor angolano 1941",
  },
  {
    id: 12,
    quote:
      "“O homem pretende ser imortal e para isso defende princípios efêmeros. Um dia, inexoravelmente, descobrirá que para ser imortal deverá defender Princípios Absolutos. Nesse dia, morrerá para a carne, efêmera, e viverá para o Espírito, Eterno. Será Imortal.”",
    author: "Celso Charuri 1940–1981",
  },
  {
    id: 13,
    quote:
      "“Ou escreves algo que valha a pena ler, ou fazes algo acerca do qual valha a pena escrever.”",
    author: "Benjamin Franklin político e fundador dos EUA 1706–1790",
  },
  {
    id: 14,
    quote:
      "“Um dos testes de liderança é a habilidade de reconhecer um problema antes que ele se torne uma emergência.”",
    author: "Arnold Glasgow",
  },
  {
    id: 15,
    quote:
      "“A teoria sem a prática vira 'verbalismo', assim como a prática sem teoria, vira ativismo. No entanto, quando se une a prática com a teoria tem-se a práxis, a ação criadora e modificadora da realidade.”",
    author: "Paulo Freire filósofo e educador brasileiro 1921–1997",
  },
  {
    id: 16,
    quote:
      "“A sabedoria é, suponho eu, o uso correto do conhecimento. Saber não é ser sábio. Muitos homens sabem muito, e são todos os maiores tolos por isso. Não há tolo tão grande como um tolo sabedor. Mas saber como usar o conhecimento é ter sabedoria.”",
    author: "Charles Spurgeon 1834–1892",
  },
  {
    id: 17,
    quote: "“É muito melhor cair das nuvens que de um terceiro andar!”",
    author: "Machado de Assis escritor brasileiro 1839–1908",
  },
  {
    id: 18,
    quote: "“Eu, que tenho mais consciência, terei menos liberdade!”",
    author: "Calderón de la Barca 1600–1681",
  },
  {
    id: 19,
    quote: "“Da Lua os claros raios rutilavam…”",
    author: "Luís Vaz de Camões poeta português 1524–1580",
  },
  {
    id: 20,
    quote:
      "“Verdadeiros amigos não passam anos prometendo estar ao nosso lado, eles nunca sabem quando vamos precisar deles, e mesmo assim se prontificam a nos apoiar em qualquer situação.”",
    author: "Rafael Valladão Rocha",
  },
  {
    id: 21,
    quote:
      "“O homem pretende ser imortal e para isso defende princípios efêmeros. Um dia, inexoravelmente, descobrirá que para ser imortal deverá defender Princípios Absolutos. Nesse dia, morrerá para a carne, efêmera, e viverá para o Espírito, Eterno. Será Imortal.”",
    author: "Celso Charuri 1940–1981",
  },
  {
    id: 22,
    quote:
      "“Para construir um Mundo Melhor basta seguir o que você já reconhece como certo, cumprindo com coragem e acionando a verdade que é a razão de sua vida. Basta seguir o que você já sabe ser certo, e não ficar procurando o que é certo para seguir. Um estado de vigilância, sim, vigilância, no sentido de não desperdiçar nenhuma experiência, vigilância para aproveitar o resultado das experiências pelas quais você passa, e encontrar nelas o ponto da sabedoria que lá está, escrito.”",
    author: "Celso Charuri 1940–1981",
  },
  {
    id: 23,
    quote:
      "“O jornalismo é popular, mas é popular principalmente como ficção. A vida é um mundo, e a vida vista nos jornais é outro.”",
    author: "Gilbert Keith Chesterton 1874–1936",
  },
  {
    id: 24,
    quote:
      "“Quem quer algo de grande, como diz Goethe, deve saber limitar-se. Quem, pelo contrário, tudo quer, nada, em verdade, quer e nada consegue.”",
    author: "Hegel, livro Enzyklopädie der philosophischen Wissenschaften",
  },
  {
    id: 25,
    quote: "“Acabou a era do emprego. Começa a era do trabalho.”",
    author: "Václav Havel 1936–2011",
  },
  {
    id: 26,
    quote:
      "“Se me perguntarem qual o sentimento que considero mais bonito ou mais importante, vou abrir um sorriso e dizer: O correspondido!”",
    author: "Martha Medeiros escritora e jornalista brasileira 1961",
  },
  {
    id: 27,
    quote:
      "“Apenas seguir em frente. Primeiro, porque nenhum amor deve ser mendigado. Segundo, porque todo amor deve ser recíproco.”",
    author: "Martha Medeiros escritora e jornalista brasileira 1961",
  },
  {
    id: 28,
    quote:
      "“Somos desfeitos pela verdade. A vida é um sonho. É o despertar que nos mata.”",
    author: "Virginia Woolf escritora inglesa 1882–1941",
  },
  {
    id: 29,
    quote: "“A morte é um ministro inexorável, que não adia a execução.”",
    author: "William Shakespeare dramaturgo e poeta inglês 1564–1616",
  },
  {
    id: 30,
    quote:
      "“Quando as águias estão caladas, os papagaios começam a tagarelar.”",
    author: "Winston Churchill Político britânico 1874–1965",
  },
  {
    id: 31,
    quote:
      "“Existe três cachorros perigosos: a ingratidão, a soberba e a inveja. Quando mordem deixam uma ferida profunda.”",
    author: "Martinho Lutero teólogo e professor 1483–1546",
  },
];

const btnGenerator = document.querySelector("#generator-btn");
btnGenerator.addEventListener("click", showQuotes);

function randomQuote(array) {
  let max = array.length;
  let quoteRandom = Math.floor(Math.random() * max);
  let quote = array[quoteRandom];

  return quote;
}

function showQuotes() {
  let phrase = document.querySelector(".phrases");
  let author = document.querySelector(".author");

  let quote = randomQuote(quotes);

  if (quote === undefined) {
    phrase.textContent =
      "Clique no botão para gerar uma citação interessante...";
    author.textContent = "";
  }

  phrase.textContent = quote.quote;
  author.textContent = quote.author;
}
