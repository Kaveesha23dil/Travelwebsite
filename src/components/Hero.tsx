"use client";

import styles from "./Hero.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Page load reveal
    gsap.fromTo(
      textRef.current?.children as HTMLCollection,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
    );

    // Parallax on scroll
    gsap.to(wrapperRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper} ref={wrapperRef}>
        <Image
          src="/images/hero_background.png"
          alt="Beautiful Valley"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content} ref={textRef}>
        <h1 className={styles.title}>
          Overseas<br />Holiday<br />Solutions.
        </h1>
        <button className={`btn btn-secondary ${styles.btnStarted}`}>Get Started</button>
      </div>
    </section>
  );
}
