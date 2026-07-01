import "./Header.css";

const Logo = () => <img src="img/dc-logo.png" alt="Logo" />;
const Navbar = () => (
  <ul>
    <li>
      <a href="#">CHARACTERS</a>
      <a href="#" className="active">
        COMICS
      </a>
      <a href="#">MOVIES</a>
      <a href="#">TV</a>
      <a href="#">GAMES</a>
      <a href="#">COLLECTIBLES</a>
      <a href="#">VIDEOS</a>
      <a href="#">FANS</a>
      <a href="#">NEWS</a>
      <a href="#">SHOP</a>
    </li>
  </ul>
);
export const Header = () => (
  <header>
    <Logo />
    <Navbar />
  </header>
);
