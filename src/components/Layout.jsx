import React from "react";

const Layout = ({ children }) => {
    const communityMenu = [
        {
            id: 1,
            icon: "images/user-icon.svg",
            header: "General User",
            text: "Odio mi in id tellus turpis elementum ipsum.",
        },
        {
            id: 2,
            icon: "images/user-group.svg",
            header: "Election Candidates",
            text: "Odio mi in id tellus turpis elementum ipsum.",
        },
        {
            id: 3,
            icon: "images/user-circle.svg",
            header: "Decide To Run (DTR)",
            text: "Odio mi in id tellus turpis elementum ipsum.",
        },
        {
            id: 4,
            icon: "images/user-talk.svg",
            header: "Reporters",
            text: "Odio mi in id tellus turpis elementum ipsum.",
        },
    ];
    return (
        <div>
            <header className="container">
                <nav className="navbar flex justify-between items-center py-[42px]">
                    <div className="home-logo">
                        <img src="images/main-log.svg" alt="hernalytics logo" />
                    </div>
                    <ul className="nav-list flex flex-1 justify-between">
                        <li className="nav-item">about</li>
                        <li className="nav-item">
                            <div className="dropdown dropdown-hover">
                                <button tabIndex={0} className="nav-item flex items-center gap-1">
                                    our communiities <img src="images/dropdown-icon.svg" alt="" />
                                </button>
                                <div tabIndex={0} className="dropdown-content menu pt-5">
                                    <div className=" bg-white w-[712px] grid grid-cols-2 py-8 px-6 gap-8 rounded-none ">
                                        {communityMenu.map((menu) => (
                                            <div key={menu.id} className="flex gap-3">
                                                <div>
                                                    <img src={`${menu.icon}`} alt={`${menu.header}`} />
                                                </div>
                                                <div className="normal-case">
                                                    <p className="text-[#24304D] font-semibold">{menu.header}</p>
                                                    <span className="text-[13px] text-[#3B4665]">{menu.text}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown dropdown-hover">
                                <button tabIndex={0} className="nav-item flex items-center gap-1">
                                    election data <img src="images/dropdown-icon.svg" alt="" />
                                </button>
                                <div tabIndex={0} className="dropdown-content menu pt-5">
                                    <div className="w-[220px] bg-white px-5 py-3 ">
                                        <div className="text-[#00344D] normal-case">
                                            <p className="mb-3">Election Day Live Updates</p>
                                            <p>Post- Election Analysis</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
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
                        <p className="mb-6 hover:cursor-pointer">Our Story</p>
                        <p className="mb-6 hover:cursor-pointer">Blog</p>
                        <p className="mb-6 hover:cursor-pointer">About Hernalytics</p>
                        <p className="mb-6 hover:cursor-pointer">Videos</p>
                    </div>
                    <div>
                        <h6 className="mb-6 font-bold">Support</h6>
                        <p className="mb-6 hover:cursor-pointer">FAQs</p>
                        <p className="mb-6 hover:cursor-pointer">Privacy Policy</p>
                        <p className="mb-6 hover:cursor-pointer">About Hernalytics</p>
                        <p className="mb-6 hover:cursor-pointer">Terms of Service</p>
                    </div>
                    <div>
                        <h6 className="mb-6 font-bold">Let’s chat!</h6>
                        <p className="mb-6 hover:cursor-pointer">hernalytics@gmail.com</p>
                        <p className="mb-6 hover:cursor-pointer">Privacy Policy</p>
                        <p className="mb-6 hover:cursor-pointer">+234 801 234 5678</p>
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
