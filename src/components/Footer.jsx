import "./Footer.css";

const menus = [
  {
    id: 1,
    name: "DC COMICS",
    links: [
      { id: 1, href: "#", text: "Characters" },
      { id: 2, href: "#", text: "Comics" },
      { id: 3, href: "#", text: "Movies" },
      { id: 4, href: "#", text: "TV" },
      { id: 5, href: "#", text: "Games" },
      { id: 6, href: "#", text: "Videos" },
      { id: 7, href: "#", text: "News" },
    ],
  },
  {
    id: 2,
    name: "SHOP",
    links: [
      { id: 1, href: "#", text: "Shop DC" },
      { id: 2, href: "#", text: "Shop DC Collectibles" },
    ],
  },
  {
    id: 3,
    name: "DC",
    links: [
      { id: 1, href: "#", text: "Term of Use" },
      { id: 2, href: "#", text: "Privaci Police (New)" },
      { id: 3, href: "#", text: "Ad Choices" },
      { id: 4, href: "#", text: "Advertising" },
      { id: 5, href: "#", text: "Jobs" },
      { id: 6, href: "#", text: "Subscriptions" },
      { id: 7, href: "#", text: "Talent Workshops" },
      { id: 8, href: "#", text: "CPSC Certificates" },
      { id: 9, href: "#", text: "Ratings" },
      { id: 10, href: "#", text: "Shop Help" },
      { id: 11, href: "#", text: "Contact Us" },
    ],
  },
  {
    id: 4,
    name: "SITES",
    links: [
      { id: 1, href: "#", text: "DC" },
      { id: 2, href: "#", text: "MAD Magazine " },
      { id: 3, href: "#", text: "DC Kids" },
      { id: 4, href: "#", text: "DC Universe" },
      { id: 5, href: "#", text: "DC Power Visa" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="columns-container">
          {menus.map((menu) => (
            <div className="column" key={menu.id}>
              <h3>{menu.name}</h3>
              <ul>
                {menu.links.map((link) => (
                  <li key={link.id}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <img className="big-logo-bg" src="/img/dc-logo-bg.png" alt="DC Logo Background" />
        </div>
      </div>

      <div className="footer-bottom">
        <button type="button">SIGN-UP NOW!</button>

        <div className="social-container">
          <span>FOLLOW US</span>
          <img src="/img/footer-facebook.png" alt="Facebook" />
          <img src="/img/footer-twitter.png" alt="Twitter" />
          <img src="/img/footer-youtube.png" alt="YouTube" />
          <img src="/img/footer-pinterest.png" alt="Pinterest" />
          <img src="/img/footer-periscope.png" alt="Periscope" />
        </div>
      </div>
    </footer>
  );
};
