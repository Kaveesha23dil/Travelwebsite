"use client";

import styles from "./ExploreSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const destinations = [
  { id: 1, name: "Cascading Waterfalls", type: "On Deals", image: "/images/explore_waterfall.png", gridArea: "a" },
  { id: 2, name: "Pristine Beaches", type: "Top Places", image: "/images/explore_beach.png", gridArea: "b" },
  { id: 3, name: "Wildlife & Nature", type: "Just Listed", image: "/images/explore_forest.png", gridArea: "c" },
  { id: 4, name: "Hill Country", type: "Top Ranked", image: "/images/explore_mountain.png", gridArea: "d" },
];

export default function ExploreSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.subtitle}>EXPLORE</span>
            <h2 className={styles.title}>Our tailored destinations<br />just for you</h2>
          </div>
          <p className={styles.description}>
            Experience the difference with our exceptional and personalized services that guarantee a memorable journey.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              className={styles.card}
              style={{ gridArea: dest.gridArea }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image 
                src={dest.image} 
                alt={dest.name} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image} 
              />
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <h3>{dest.name}</h3>
                <span className={styles.badge}>{dest.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
