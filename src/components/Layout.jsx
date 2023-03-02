import React from "react";

const Layout = ({ children }) => {
    return (
        <div>
            <header className="container">
                <nav className="navbar flex justify-between">
                    <div className="home-logo">
                        <img src="images/main-log.svg" alt="hernalytics logo" />
                    </div>
                    <ul className="nav-list flex flex-1 justify-between">
                        <li className="nav-item">about</li>
                        <li className="nav-item">our communiities</li>
                        <li className="nav-item">election data</li>
                        <li className="nav-item">e-buddy</li>
                        <li className="nav-item">veo platform</li>
                    </ul>
                    <div className="navbar_auth">
                        <p className="nav-item">login</p>
                        <p className="nav-item navbar_auth-signup">sign up</p>
                    </div>
                </nav>
            </header>
            <section className="container">{children}</section>
            <footer>
                <div>
                    <div className="footer-logo"></div>
                    <p>
                        Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, <br /> Nigeria
                    </p>
                    <p>© 2022 Hernalytics</p>
                </div>
                <div>
                    <h6>About</h6>
                    <p>Our Story</p>
                    <p>Blog</p>
                    <p>About Hernalytics</p>
                    <p>Videos</p>
                </div>
                <div>
                    <h6>Support</h6>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <p>About Hernalytics</p>
                    <p>Terms of Service</p>
                </div>
                <div>
                    <h6>Let’s chat!</h6>
                    <p>hernalytics@gmail.com</p>
                    <p>Privacy Policy</p>
                    <p>+234 801 234 5678</p>
                    <div>
                        <img src="images/instagramm.svg" alt="instagram" />
                        <img src="images/twitter.svg" alt="twitter" />
                        <img src="images/watsapp.svg" alt="whatsapp" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
