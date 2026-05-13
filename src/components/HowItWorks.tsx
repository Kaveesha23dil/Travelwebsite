"use client";

import styles from "./HowItWorks.module.css";
import Image from "next/image";
import { MapPin, CalendarDays, CreditCard, Compass } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, icon: MapPin, title: "Find your destination", desc: "Select your desired destination from our wide range of options." },
  { id: 2, icon: CalendarDays, title: "Book a ticket", desc: "Choose the dates and book your tickets securely online." },
  { id: 3, icon: CreditCard, title: "Make payment", desc: "Pay for your ticket safely and securely via our payment gateway." },
  { id: 4, icon: Compass, title: "Explore Destination", desc: "Arrive at your destination and enjoy an unforgettable experience." },
];

export default function HowItWorks() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: 20,
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
      <div className="container">
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                ref={imageRef}
                src="/images/ticket_process.png"
                alt="Ticket Process"
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          </div>
          
          <div className={styles.stepsContainer}>
            <span className={styles.subtitle}>HOW IT WORKS</span>
            <h2 className={styles.title}>Ticket ordering process</h2>
            
            <div className={styles.timeline}>
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className={styles.step}>
                    <div className={styles.iconWrapper}>
                      <Icon size={20} className={styles.icon} />
                    </div>
                    <div className={styles.stepInfo}>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
