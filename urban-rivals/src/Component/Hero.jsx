import React from 'react';
import { useState } from "react";
import "../Styles/Hero.css";

export default function Hero() {
    const [move, setMove] = useState({ x: 0, y: 0 });

    const handleMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        setMove({ x, y });
    };

    return (
        <section className="hero" onMouseMove={handleMove}>
            {/* Background */}
            <img src="/hero_background.jpg" className="layer bg" alt="" style={{ transform: `translate(${move.x}px, ${move.y}px)` }} />

            {/* Characters */}

            <img
                src="/hero_char_4.png"
                className="layer char4"
                style={{ transform: `translate(${move.x}px, ${move.y}px)` }}
                alt=""
            />


            {/* <div className="char-orange char1">
                <div className="char-glow-orange"></div>
                <img src="/hero_char_1.png" alt="" />
            </div> */}

            <img
                src="/hero_char_1.png"
                className="layer char1"
                style={{ transform: `translate(${move.x}px, ${move.y}px)` }}
                alt=""
            />
            {/* <img
                src="/hero_char_2.png"
                className="layer char2"
                style={{ transform: `translate(${-move.x}px, ${-move.y}px)` }}
                alt=""
            /> */}

            <div className="char-yellow char2">
                <div className="char-glow-yellow"></div>
                <img src="/hero_char_2.png" alt="" />
            </div>

            <img
                src="/hero_char_3.png"
                className="layer char3"
                style={{ transform: `translate(${-move.x}px, ${-move.y}px)` }}
                alt=""
            />

            {/* Logo Center */}
            {/* <img src="/logo.png" className="center-logo" alt="" /> */}

            <div className="char-orange">
                <div className="char-glow-orange"></div>
                <img src="/logo.png" className="center-logo" alt="" />
            </div>

            {/* Play Button */}
            <div className="play-wrapper">
                <img src="/hero_btn.png" alt="" />
                <div className="play-glow">
                    <i class="fa-solid fa-play play_icon"></i>
                </div>
            </div>

            {/* Store Buttons */}
            <div className="stores">
                <img src="/logo_win.png" />
                <img src="/logo_steam.png" />
                <img src="/logo_webgl.png" />
                <img src="/logo_appstore.png" />
                <img src="/logo_googleplay.png" />
            </div>

        </section>
    );
}
