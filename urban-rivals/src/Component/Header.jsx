import React from 'react'
import "../Styles/Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src="/Logo.png" alt="" />
            </div>

            <div className="header-right">
                <div className="nav">
                    {/* <img src="" className="logo" alt="logo" /> */}
                    <ul className="nav_bar">
                        <li className="nav_anim">HOME</li>
                        <hr />
                        <li className="nav_anim">GAME</li>
                        <hr />
                        <li className="nav_anim">FACTIONS</li>
                        <hr />
                        <li className="nav_anim">COMMUNITY</li>
                        <hr />
                        <li className="nav_anim_diff">
                            <div className="nav_diff">
                                <i class="fa-brands fa-discord"></i>
                                DisCORD
                            </div>
                        </li>
                    </ul>
                    <div className="wire">
                        <img src="/Blue_wire_1.png" className="wire_1" alt="" />
                        <img src="/Blue_wire_2.png" className="wire_2" alt="" />
                        <img src="/Blue_wire_2.png" className="wire_3" alt="" />
                        <img src="/Red_wire_1.png" className="wire_4" alt="" />
                        <img src="/Red_wire_2.png" className="wire_5" alt="" />
                    </div>
                    <div className="button_bg">
                        <button className="play-top">PLAY</button>
                    </div>
                </div>
            </div>

            {/* <img src="" className="header-right" alt="" /> */}
        </header>
    )
}
