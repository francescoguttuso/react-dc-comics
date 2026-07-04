import "./Main.css";
import comics from "../data/comics.js";

const Jumbotron = () => <div className="jumbotron" />;

export const Main = () => {
  return (
    <main>
      <div className="container">
        <Jumbotron />
        <h1>current series</h1>

        {comics.map((comic) => (
          <div key={comic.id} className="cards">
            <img src={comic.thumb} alt={comic.title} />
            <h2>{comic.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};
