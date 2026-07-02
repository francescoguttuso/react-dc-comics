export const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="columns-container">
                    <div className="column">
                        <h3>DC COMICS</h3>
                        <ul>
                            <li><a href="#characters">Characters</a></li>
                            <li><a href="#comics">Comics</a></li>
                            <li><a href="#movies">Movies</a></li>
                            <li><a href="#tv">TV</a></li>
                            <li><a href="#games">Games</a></li>
                            <li><a href="#videos">Videos</a></li>
                            <li><a href="#news">News</a></li>
                        </ul>

                        <h3 style={{ marginTop: '15px' }}>SHOP</h3>
                        <ul>
                            <li><a href="#shop-help">Shop Help</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>


                    <div className="column">
                        <h3>DC</h3>
                        <ul>
                            <li><a href="#terms">Terms Of Use</a></li>
                            <li><a href="#privacy">Privacy policy (New)</a></li>
                            <li><a href="#ad-choices">Ad Choices</a></li>
                            <li><a href="#advertising">Advertising</a></li>
                            <li><a href="#jobs">Jobs</a></li>
                            <li><a href="#subscriptions">Subscriptions</a></li>
                            <li><a href="#talent">Talent Workshops</a></li>
                            <li><a href="#ratings">CPSC Certificates</a></li>
                            <li><a href="#ratings">Ratings</a></li>
                            <li><a href="#shop-help">Shop Help</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>


                    <div className="column">
                        <h3>SITES</h3>
                        <ul>
                            <li><a href="#dc">DC</a></li>
                            <li><a href="#mad">MAD Magazine</a></li>
                            <li><a href="#kids">DC Kids</a></li>
                            <li><a href="#universe">DC Universe</a></li>
                            <li><a href="#power-visa">DC Power Visa</a></li>
                        </ul>
                    </div>

                </div>
            </div>


            <div className="footer-bottom">
                <button type="button">SIGN-UP NOW!</button>

                <div className="social-container">
                    <span>FOLLOW US</span>
                    {/* I link alle immagini puntano direttamente alla cartella public/img/ */}
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