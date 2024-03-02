import Image from "next/image";
import Link from "next/link";

import LOGO from "../../assets/logo/full.png";

import styles from "./index.module.css";

const Footer = () => {
  return (
    <div
      className={`${styles.container} py-4 px-4 d-flex align-items-center justify-content-between`}
    >
      <div className={`${styles.brand} `}>
        <Link href="/">
          <Image height={40} src={LOGO} alt="Revisela" />
        </Link>
      </div>
      <div className={`${styles.menu} d-flex gap-4`}>
        <Link href="/" className="text-dark text-decoration-none fw-bold">
          Home
        </Link>
        <Link
          href="/contact"
          className="text-dark text-decoration-none fw-bold"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Footer;
