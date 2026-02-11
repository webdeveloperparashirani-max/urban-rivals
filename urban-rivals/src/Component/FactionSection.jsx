import React from 'react';
import { useState, useEffect, useRef } from "react";
import "../Styles/FactionSection.css";

export default function FactionSection() {
    const slides = [
        {
            img: "/Slide_1.png",
            faction: "Guardians",
            desc: "The SENTINEL forces of law and order, the ALL STARS' athletes, the HURACAN luchadores, the RESCUE medical staff, the FANG PI CLANG martial art specialists and the LA JUNTA soldiers are the muscle defending the city!"
        },
        {
            img: "/Slide_2.png",
            faction: "Urbans",
            desc: "Clint City culture comes from the streets - from the super rich UPPERS' downtown, the BANGERS' working-class neighborhoods, the JUNKZ's more radical areas, the dark alleys of the MONTANA mafia and the PUSSYCATS' nightclubs!"
        },
        {
            img: "/Slide_3.png",
            faction: "Activists",
            desc: "Six clans fight together to protect the urban nature. At sea for the ULU WATU, in the forest for the ROOTS, on the islands for the KOMBOKA, in the mountains for the FROZN, at the zoo for the JUNGO, and in the whimsical clouds of the ZENITH."
        },
        {
            img: "/Slide_4.png",
            faction: "Psychos",
            desc: "The city also has some unusual places, some of which are not at all recommendable. From the furious motel BERZERK, to the post-apocalyptic desert RAPTORS, and the pirate ship PIRANAS, to the asylum of mad artists PARADOX, the unhealthy circus of FREAKS, and the space farmers COSMOHNUT, it seems that everyone here has completely lost their mind!"
        },
        {
            img: "/Slide_5.png",
            faction: "Supernaturals",
            desc: "The cursed DOMINION toys, the students of the SKEELZ academy, the goths from the NIGHTMARE manor, the phantom GHOSTOWN cowboys and the OBLIVION shape-shifters all have supernatural powers!"
        }
        ,
        {
            img: "/Slide_6.png",
            faction: "Technophiles",
            desc: "Very dangerous, futurist technology is in the hands of the HIVE rebel warriors, their VORTEX nemesis, the SAKROHM alien sect, the RIOTS' steampunks and the GHEIST'S evil scientists."
        }
        ,
        {
            img: "/Slide_8.png",
            faction: "Leaders",
            desc: "Leaders are beings with exceptional abilities, but also solitary wolves who live in seclusion, outside of the clans. They usually observe the city from afar. In the rare occasions when they take action, the world is changed."
        }
        ,
        {
            img: "/Slide_8.png",
            faction: "Oculus",
            desc: "The Oculus plant their dark roots in all clans and draw their energy from the conflicts they provoke. Corrupting the political class and the elite of Clint City, these nightmarish creatures are behind the darkest schemes."
        }
    ];

    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const leftRef = useRef(null);
    const middleRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio >= 0.5) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            {
                threshold: 0.5   // 20% visible
            }
        );

        [leftRef, middleRef, rightRef].forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="faction">
            {/* LEFT TEXT */}
            <div className="faction-left reveal-left" ref={leftRef}>
                <div className="left_diff">
                    <h1>ADDICTIVE</h1>
                    <p>
                        Urban Rivals offers you more than 2500 characters, each with their
                        own evolutions and stories. The more missions you complete by
                        playing, the more rewards you get to evolve your characters,
                        increase your Collection GRADE and your Season Level!
                    </p>
                </div>
                <hr />
            </div>

            {/* MIDDLE TEXT */}
            <div className="faction-middle reveal-right" ref={middleRef}>
                <span className="label">FACTION:</span>
                <h2>{slides[index].faction}</h2>
                <p>{slides[index].desc}</p>
            </div>

            {/* RIGHT IMAGE (MERGED CARDS) */}
            <div className="faction-right reveal-right" ref={rightRef}>
                <img
                    src={slides[index].img}
                    className="slide-image"
                    alt="faction"
                />
            </div>

            {/* CONTROLS */}
            <div className="slider-controls">
                <button className="arrow" onClick={prev}>
                    <div className="inner_arrow">
                        <i class="fa-solid fa-play left_arrow"></i>
                    </div>
                </button>

                <div className="dots">
                    {slides.map((_, i) => (
                        <span
                            key={i}
                            className={i === index ? "active" : ""}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>

                <button className="arrow" onClick={next}>
                    <div className="inner_arrow">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </button>
            </div>
        </section>
    );
}
