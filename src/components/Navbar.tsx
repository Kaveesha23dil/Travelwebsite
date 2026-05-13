"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.logo}>DOLANAN</div>
      <div className={styles.links}>
        <Link href="#" className={styles.link}>Home</Link>
        <Link href="#" className={styles.link}>Destination</Link>
        <Link href="#" className={styles.link}>Tour</Link>
        <Link href="#" className={styles.link}>Contact</Link>
      </div>
      <button className={`btn btn-secondary ${styles.btnRegister}`}>Register Now</button>
    </nav>
  );
}
