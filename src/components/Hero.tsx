"use client";

import styles from "./Hero.module.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TimeMode = "morning" | "afternoon" | "evening" | "night";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [timeMode, setTimeMode] = useState<TimeMode>("morning");
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      if (isManual) return;
      const currentHour = new Date().getHours();
      
      if (currentHour >= 5 && currentHour < 12) {
        setTimeMode("morning");
      } else if (currentHour >= 12 && currentHour < 17) {
        setTimeMode("afternoon");
      } else if (currentHour >= 17 && currentHour < 20) {
        setTimeMode("evening");
      } else {
        setTimeMode("night");
      }
    };

    checkTime();
    // Update every minute to track time accurately
    const intervalId = setInterval(checkTime, 60000);

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

    return () => clearInterval(intervalId);
  }, [isManual]);

  const getOverlayClass = () => {
    switch (timeMode) {
      case "morning": return styles.overlayMorning;
      case "afternoon": return styles.overlayAfternoon;
      case "evening": return styles.overlayEvening;
      case "night": return styles.overlayNight;
      default: return styles.overlayMorning;
    }
  };

  const getImageSrc = () => {
    switch (timeMode) {
      case "evening": return "/images/galle_fort_evening.png";
      case "night": return "/images/galle_fort_night.png";
      case "morning":
      case "afternoon":
      default: return "/images/galle_fort.png";
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper} ref={wrapperRef}>
        <Image
          src={getImageSrc()}
          alt={`Galle Fort - ${timeMode}`}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <div className={`${styles.overlay} ${getOverlayClass()}`}></div>
      </div>
      
      <div className={styles.content} ref={textRef}>
        <h1 className={styles.title}>
          Experience<br />Authentic<br />Sri Lanka.
        </h1>
        <button className={`btn btn-secondary ${styles.btnStarted}`}>Get Started</button>
        
        <div className={styles.timeControls}>
          <button 
            className={`${styles.timeBtn} ${timeMode === 'morning' ? styles.active : ''}`}
            onClick={() => { setIsManual(true); setTimeMode('morning'); }}
          >Morning</button>
          <button 
            className={`${styles.timeBtn} ${timeMode === 'afternoon' ? styles.active : ''}`}
            onClick={() => { setIsManual(true); setTimeMode('afternoon'); }}
          >Afternoon</button>
          <button 
            className={`${styles.timeBtn} ${timeMode === 'evening' ? styles.active : ''}`}
            onClick={() => { setIsManual(true); setTimeMode('evening'); }}
          >Evening</button>
          <button 
            className={`${styles.timeBtn} ${timeMode === 'night' ? styles.active : ''}`}
            onClick={() => { setIsManual(true); setTimeMode('night'); }}
          >Night</button>
        </div>
      </div>
    </section>
  );
}
