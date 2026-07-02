import "./Header.css";

const Logo = () => <img src="img/dc-logo.png" alt="Logo" />;
const Navbar = () => (
  <ul>
    <li><a href="#">CHARACTERS</a></li>
    <li><a href="#" className="active">
      COMICS
    </a></li>
    <li><a href="#">MOVIES</a></li>
    <li><a href="#">TV</a></li>
    <li><a href="#">GAMES</a></li>
    <li><a href="#">COLLECTIBLES</a></li>
    <li><a href="#">VIDEOS</a></li>
    <li><a href="#">FANS</a></li>
    <li><a href="#">NEWS</a></li>
    <li><a href="#">SHOP</a></li>

  </ul>
);
export const Header = () => (
  <header>
    <Logo />
    <Navbar />
  </header>
);
