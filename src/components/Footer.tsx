import styles from "./Footer.module.css";

const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import { Mail, Phone, MapPin, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3>CEYLON EXPLORER</h3>
            <p>Don't miss out on our interesting Sri Lanka tour packages, please follow our social media so you don't miss out on other interesting information.</p>
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <Mail size={16} />
                <span>hello@ceylonexplorer.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <span>+94 77 123 4567</span>
              </div>
            </div>
          </div>
          
          <div className={styles.links}>
            <h4>LINKS</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Destination</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Explore More</a></li>
            </ul>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.basedIn}>
              <h4>BASED IN</h4>
              <div className={styles.locationItem}>
                <MapPin size={16} />
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className={styles.locationItem}>
                <Camera size={16} />
                <span>Tourism SL</span>
              </div>
            </div>
            
            <div className={styles.social}>
              <h4>FOLLOW</h4>
              <div className={styles.icons}>
                <a href="#" className={styles.icon}><LinkedinIcon size={16} /></a>
                <a href="#" className={styles.icon}><TwitterIcon size={16} /></a>
                <a href="#" className={styles.icon}><FacebookIcon size={16} /></a>
                <a href="#" className={styles.icon}><InstagramIcon size={16} /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2024 All rights reserved - Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
