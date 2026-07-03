import "./Main.css";
import comics from "../data/comics.js";

const Jumbotron = () => <div className="jumbotron" />;

export const Main = () => {
  return (
    <main>
      <div className="container">
        <Jumbotron />
        <h1>current series</h1>
      </div>
    </main>
  );
};
