"use client";

import styles from "./TourSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const tours = [
  { id: 1, name: "Cultural Triangle", image: "/images/tour_cultural.png" },
  { id: 2, name: "Wildlife Safari", image: "/images/tour_wildlife.png" },
  { id: 3, name: "Hill Country Train", image: "/images/tour_train.png" },
];

export default function TourSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.subtitle}>TOUR</span>
            <h2 className={styles.title}>Come here and explore the<br />beautiful places here.</h2>
          </div>
          <button className={`btn btn-primary ${styles.btnExplore}`}>Explore More</button>
        </div>

        <div className={styles.grid}>
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.cardInfo}>
                <h3>{tour.name}</h3>
                <span className={styles.seeMore}>See more &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
