import "./Main.css";
import comics from "../data/comics.js";

const Jumbotron = () => <div className="jumbotron" />;

export const Main = () => {
  return (
    <main>
      <div className="container">
        <Jumbotron />
        <h1>current series</h1>
        <div className="comics-grid">
          {comics.map((comic) => (
            <div key={comic.id} className="card-item">
              <img src={comic.thumb} alt={comic.title} />
              <h2>{comic.title}</h2>
            </div>
          ))}
        </div>
        <button className="load-more">LOAD MORE </button>
      </div>
    </main>
  );
};
