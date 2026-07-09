import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { BluBar } from "./components/BluBar";
import comics from "./data/comics.js";

const App = () => (
  <>
    <Header />
    <Main comics={comics} />
    <BluBar />
    <Footer />
  </>
);

export default App;
