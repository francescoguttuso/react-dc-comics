import "./Header.css";

const links = [
  {
    id: 1,
    href: "#",
    text: "CHARACTERS",
    active: false,
  },
  {
    id: 2,
    href: "#",
    text: "COMICS",
    active: true,
  },
  {
    id: 3,
    href: "#",
    text: "MOVIES",
    active: false,
  },
  {
    id: 4,
    href: "#",
    text: "TV",
    active: false,
  },
  {
    id: 5,
    href: "#",
    text: "GAMES",
    active: false,
  },
  {
    id: 6,
    href: "#",
    text: "COLLECTIBLES",
    active: false,
  },
  {
    id: 7,
    href: "#",
    text: "VIDEOS",
    active: false,
  },
  {
    id: 8,
    href: "#",
    text: "FANS",
    active: false,
  },
  {
    id: 9,
    href: "#",
    text: "NEWS",
    active: false,
  },
  {
    id: 10,
    href: "#",
    text: "SHOP",
    active: false,
  },
];

const Logo = () => <img src="img/dc-logo.png" alt="Logo" />;
const Navbar = () => (
  <ul>
    {links.map((link) => (
      <li key={link.id}>
        <a href={link.href} className={link.active ? "active" : "undefined"}>
          {link.text}
        </a>
      </li>
    ))}
  </ul>
);
export const Header = () => (
  <header>
    <Logo />
    <Navbar />
  </header>
);
