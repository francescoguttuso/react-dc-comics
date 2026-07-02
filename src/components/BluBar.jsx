import "./BluBar.css";

export const BluBar = () => {
    return (
        <div className="blu-bar">
            <div className="container">
                <ul>
                    <li>
                        <img src="/img/buy-comics-digital-comics.png" alt="Digital Comics" />
                        <span>DIGITAL COMICS</span>
                    </li>

                    <li>
                        <img src="/img/buy-comics-merchandise.png" alt="Merchandise" />
                        <span>DC MERCHANDISE</span>
                    </li>

                    <li>
                        <img src="/img/buy-comics-subscriptions.png" alt="Subscription" />
                        <span>SUBSCRIPTION</span>
                    </li>

                    <li>
                        <img src="/img/buy-comics-shop-locator.png" alt="Comic Shop Locator" />
                        <span>COMIC SHOP LOCATOR</span>
                    </li>

                    <li>
                        <img src="/img/buy-dc-power-visa.svg" alt="DC Power Visa" />
                        <span>DC POWER VISA</span>
                    </li>

                </ul>
            </div>
        </div>
    );
};