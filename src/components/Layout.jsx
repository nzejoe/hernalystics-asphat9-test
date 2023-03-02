import React from "react";

const Layout = ({ children }) => {
    return (
        <div>
            <header className="container">
                <nav className="navbar flex justify-between items-center py-[42px]">
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
            <footer className="mt-[160px] pt-[80px] pb-[60px]" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                <div className="container flex justify-between">
                    <div>
                        <div className="footer-logo mb-3">
                            <img src="images/footer-logo.svg" alt="hernalystics logo" />
                        </div>
                        <p className="mb-3 font-400">
                            Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, <br /> Nigeria
                        </p>
                        <p>© 2022 Hernalytics</p>
                    </div>
                    <div>
                        <h6 className="mb-6 font-bold">About</h6>
                        <p className="mb-6">Our Story</p>
                        <p className="mb-6">Blog</p>
                        <p className="mb-6">About Hernalytics</p>
                        <p className="mb-6">Videos</p>
                    </div>
                    <div>
                        <h6 className="mb-6 font-bold">Support</h6>
                        <p className="mb-6">FAQs</p>
                        <p className="mb-6">Privacy Policy</p>
                        <p className="mb-6">About Hernalytics</p>
                        <p className="mb-6">Terms of Service</p>
                    </div>
                    <div>
                        <h6 className="mb-6 font-bold">Let’s chat!</h6>
                        <p className="mb-6">hernalytics@gmail.com</p>
                        <p className="mb-6">Privacy Policy</p>
                        <p className="mb-6">+234 801 234 5678</p>
                        <div className="flex gap-8">
                            <button>
                                <img src="images/instagramm.svg" alt="instagram" />
                            </button>
                            <button>
                                <img src="images/twitter.svg" alt="twitter" />
                            </button>
                            <button>
                                <img src="images/watsapp.svg" alt="whatsapp" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
