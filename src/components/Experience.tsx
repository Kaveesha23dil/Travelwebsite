"use client";

import styles from "./Experience.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <span className={styles.subtitle}>EXPERIENCE</span>
        <h2 className={styles.title}>Explore your favorite places<br />and book your tickets now</h2>
        <button className={`btn btn-primary ${styles.btnBook}`}>Book My Trip</button>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            ref={imageRef}
            src="/images/experience_mountain.png"
            alt="Mountain Experience"
            fill
            sizes="100vw"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
