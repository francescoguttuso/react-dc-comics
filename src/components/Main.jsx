import "./Main.css";
import comics from "../data/comics.js";

const Jumbotron = () => <div className="jumbotron" />;

export const Main = () => {
  return (
    <main>
      <Jumbotron />
      <div className="container">
        <h1>current series</h1>
        <div className="comics-grid">
          {comics.map((comic) => (
            
          ))}
        </div>
        <button className="load-more">LOAD MORE </button>
      </div>
    </main>
  );
};
