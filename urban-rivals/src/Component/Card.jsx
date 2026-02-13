import React, { useEffect, useRef } from "react";
import "../Styles/Card.css";

const data = [
  {
    title: "SIMPLE",
    img: "/Card_1.png",
    desc: "Surprisingly simple: multiply the power of your cards with PILLZ! From this solid foundation, build the most strategic deck to triumph over your opponents in no less than six varied game modes, with a maximum duration of 4 minutes per game!"
  },
  {
    title: "DYNAMIC",
    img: "/Card_2.png",
    desc: "In Clint City, play solo with the Rift mode and the Training Bot, or multiplayer with the classic Pillz mode. In any case, you will progress and reach new heights! Collection and trading are omnipresent, and every 2 weeks, new characters make their appearance!"
  },
  {
    title: "UNIQUE",
    img: "/Card_3.png",
    desc: "Urban Rivals stands out for its variety of gameplay and artistic direction. With its distinctive style, the imaginary city of Clint City will never leave you indifferent. And whatever your playstyle, Urban Rivals will offer you a unique collectible card game experience."
  }
];

export default function Card() {
  const cardsRef = useRef([]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("show");
  //         } else {
  //           entry.target.classList.remove("show");
  //         }
  //       });
  //     },
  //     { threshold: 0.2 }
  //   );

  //   cardsRef.current.forEach((el) => observer.observe(el));

  //   // ===== PARALLAX SCROLL EFFECT =====
  //   const handleScroll = () => {
  //     cardsRef.current.forEach((card, i) => {
  //       if (!card) return;

  //       const rect = card.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;

  //       // how much card is inside screen
  //       const visible = windowHeight - rect.top;

  //       // parallax strength
  //       // const move = visible * 0.08 * (i + 1);
  //       const move = visible * 0.08 * (cardsRef.current.length - i);

  //       card.style.transform = `translateY(${Math.max(
  //         0,
  //         150 - move
  //       )}px)`;
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    const isMobile = window.matchMedia("(max-width: 1024px)").matches;

    let observer;

    // ===== INTERSECTION OBSERVER =====
    if (!isMobile) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("show", entry.isIntersecting);
          });
        },
        { threshold: 0.2 }
      );

      cards.forEach((el) => observer.observe(el));
    } else {
      // Mobile → always visible
      cards.forEach((el) => el.classList.add("show"));
    }

    // ===== PARALLAX SCROLL =====
    const handleScroll = () => {
      if (window.matchMedia("(max-width: 768px)").matches) return;

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const visible = window.innerHeight - rect.top;
        const move = visible * 0.08 * (cards.length - i);

        card.style.transform = `translateY(${Math.max(
          0,
          150 - move
        )}px)`;
      });
    };

    if (!isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section className="feature-section">
      <div className="center-glow"></div>

      <div className="cards-wrapper">
        {data.map((card, i) => (
          <div
            key={i}
            className="feature-card"
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="inner-card">
              <div className="img-glow"></div>
              <img src={card.img} alt="" className="card-img" />
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
