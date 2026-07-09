import "./Main.css";
import comics from "../data/comics.js";
import { Card } from "./Card.jsx";

const Jumbotron = () => <div className="jumbotron" />;

export const Main = () => {
  return (
    <main>
      <Jumbotron />
      <div className="container">
        <h1>current series</h1>
        <div className="comics-grid">
          {comics.map((comic) => (
            <Card key={comic.id} thumb={comic.thumb} title={comic.title} />
          ))}
        </div>
        <button className="load-more">LOAD MORE </button>
      </div>
    </main>
  );
};
