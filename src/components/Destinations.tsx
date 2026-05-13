"use client";

import styles from "./Destinations.module.css";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const popularTours = [
  { id: 1, name: "Sigiriya Rock", location: "Central Province, SL", price: "150", rating: 4.9, reviews: "4.2k", image: "/images/tour_cultural.png" },
  { id: 2, name: "Mirissa Beach", location: "Southern Province, SL", price: "120", rating: 4.8, reviews: "3.5k", image: "/images/dest_mirissa.png" },
  { id: 3, name: "Temple of the Tooth", location: "Kandy, SL", price: "80", rating: 4.7, reviews: "2.8k", image: "/images/dest_temple.png" },
  { id: 4, name: "Nine Arch Bridge", location: "Ella, SL", price: "100", rating: 4.9, reviews: "5.1k", image: "/images/tour_train.png" },
];

export default function Destinations() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>DESTINATION</span>
          <h2 className={styles.title}>Discover our most popular tours!</h2>
          <p className={styles.description}>
            We recommend several beautiful destinations based on various criteria and reviews. Let us find the right vacation place for you!
          </p>
        </div>

        <div className={styles.grid}>
          {popularTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={tour.image} 
                  alt={tour.name} 
                  fill 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={styles.image} 
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{tour.name}</h3>
                <div className={styles.location}>
                  <MapPin size={14} className={styles.icon} />
                  <span>{tour.location}</span>
                </div>
                <div className={styles.ratingRow}>
                  <div className={styles.stars}>
                    <Star size={14} fill="#fbbf24" color="#fbbf24" />
                    <span className={styles.rating}>{tour.rating}</span>
                    <span className={styles.reviews}>({tour.reviews})</span>
                  </div>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.price}>${tour.price}</span>
                  <span className={styles.perDay}>/ Day</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className={styles.actionCenter}>
          <button className={`btn btn-primary ${styles.btnLoad}`}>Load More</button>
        </div>
      </div>
    </section>
  );
}
