import React from 'react';
import "../Styles/Footer.css";
import { useEffect } from "react";

export default function Footer() {

    // Optional JS parallax (stronger effect)
    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(".footer-hero");
            if (!section) return;

            const offset = window.scrollY * 0.4;
            section.style.backgroundPositionY = `-${offset}px`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="footer-wrapper">

            {/* HERO PART */}
            <div className="footer-hero">
                <div className="img-glow"></div>
                <h2 className="start-title">START YOUR GAME</h2>

                <div className="platforms">
                    <img src="/logo_win.png" />
                    <img src="/logo_steam.png" />
                    <img src="/logo_webgl.png" />
                    <img src="/logo_appstore.png" />
                    <img src="/logo_googleplay.png" />
                </div>

                <button className="discord-btn">
                    <i class="fa-brands fa-discord"></i>
                    DISCORD
                </button>
            </div>

            {/* DARK FOOTER */}
            <div className="footer-dark">
                {/* <h3 className="games-logo">CUTE GAMES</h3> */}
                <img src="/Footer_Logo.png" className="games-logo" alt="" />

                <div className="social-icons">
                    <div className="inner-icon">
                        <i class="fa-brands fa-discord"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>

                    <div className="inner-icon">
                        <i class="fa-brands fa-windows"></i>
                        <i class="fa-brands fa-steam"></i>
                        <i class="fa-brands fa-app-store"></i>
                        <i class="fa-brands fa-google-play"></i>
                    </div>

                    {/* <img src="/discord_y.png" />
                    <img src="/insta.png" />
                    <img src="/yt.png" />
                    <img src="/fb.png" />
                    <img src="/windows_y.png" />
                    <img src="/steam_y.png" />
                    <img src="/apple_y.png" />
                    <img src="/play_y.png" /> */}
                </div>
            </div>

            <div className="footer-light">
                <p className="copyright">
                    © <span>Acute Games, Inc.</span> All rights reserved |
                    <span>Contact us - Terms and Conditions of use - Privacy Policy</span>
                </p>
                <p>PEGI 12</p>
            </div>

        </footer>
    );
}
