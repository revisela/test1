import Link from "next/link";
import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { textActions } from "@revisela/store/slices/textSlice";

import LOGO from "../../assets/logo/full.png";
import styles from "./index.module.css";

const Navbar = () => {
  // const dispatch = useDispatch();

  // const clearData = () => {
  //   dispatch(textActions.reset());
  // };

  return (
    <div
      className={`${styles.container} py-4 px-4 d-flex align-items-center justify-content-between`}
    >
      <div className={`${styles.brand}`}>
        {/* <Link onClick={clearData} href="/"> */}
        <Link href="/">
          <Image height={40} src={LOGO} alt="Revisela" />
        </Link>
      </div>
      <div className={`${styles.menu} d-flex gap-4`}>
        <Link href="/" className="text-dark text-decoration-none">
          Home
        </Link>
        <Link href="/contact" className="text-dark text-decoration-none ">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
