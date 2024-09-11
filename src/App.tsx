import './App.scss';

interface Article {
  image: string;
  title: string;
  description: string;
}

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
}

// Componente para o cartão de artigo
const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, description }) => (
  <div className="techblog__card">
    <img className="techblog__card-image" src={image} alt={title} />
    <div className="techblog__textblock">
      <h3 className="techblog__card-title">{title}</h3>
      <p className="techblog__card-description">{description}</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const articles: Article[] = [
    {
      image: "/src/assets/image2.png",
      title: "O que é linguagem de programação? Conheça as principais",
      description: "Uma das mais populares vertentes da tecnologia da informação, a área de...",
    },
    {
      image: "/src/assets/image3.png",
      title: "Python: por que a linguagem é tão usada para Data Science e finanças?",
      description: "O mundo da programação conta com algumas opções de linguagem para...",
    },
    {
      image: "/src/assets/image4.png",
      title: "GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários",
      description: "O popular serviço de repositório de código GitHub foi adquirido pela...",
    },
    {
      image: "/src/assets/image5.png",
      title: "15 comandos no GIT que os desenvolvedores precisam saber",
      description: "Dominar os comandos GIT é uma habilidade que se conquista com...",
    },
    {
      image: "/src/assets/image6.png",
      title: "GIT e GitHub: o que são e quais as diferenças entre eles?",
      description: "Git e GibHub são dois softwares de controle de versão essenciais para...",
    },
    {
      image: "/src/assets/image7.png",
      title: "GitHub Copilot ganha integração com GPT-4 e interface conversacional",
      description: "O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...",
    },
  ];

  return (
    <div className="techblog">
      <header className="techblog__header">
        <div className="techblog__content">
          <section className="techblog__hero">
            <h1 className="techblog__title">
              Encontre os <span className="techblog__highlight">melhores artigos</span> de programação em um só lugar
            </h1>
            <p className="techblog__description">
              Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.
            </p>
            <button className="techblog__button">Buscar artigos</button>
          </section>
          <div className="techblog__image-container">
            <img
              className="techblog__image"
              src="/src/assets/image.png"
              alt="Ilustração de uma pessoa programando"
            />
          </div>
        </div>
      </header>

      <main className="techblog__main">
        <section className="techblog__article-section">
          <h2 className="techblog__subtitle">Artigos recomendados</h2>
          <div className="techblog__cards">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                image={article.image}
                title={article.title}
                description={article.description}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="techblog__footer">
        <h4 className="techblog__footer-title">Entre em contato</h4>
        <div className="techblog__inputs">
          <input className="techblog__input" type="text" placeholder='Nome' />
          <input className="techblog__input" type="text" placeholder='Email' />
          <textarea className="techblog__textarea" name="" id="" placeholder='Assunto da mensagem'></textarea>
          <button className="techblog__footer-button">Entrar em contato</button>
        </div>
      </footer>
    </div>
  );
};

export default App;
