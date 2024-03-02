import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@revisela/components/lib/Button";
import Wrapper from "@revisela/components/lib/Wrapper";

import LANDINGIMAGE from "@revisela/assets/images/landing-image.svg";

import styles from "./index.module.css";

const Landing = () => {
  return (
    <div className={`${styles.container}`}>
      <Wrapper
        className={`${styles.wrapper} p-5 rounded-4 d-flex align-items-center justify-content-between`}
      >
        <div className={`${styles.left}`}>
          <h2 className="fw-bold mb-5">A simple tool to help you revise. 😎</h2>
          <Link href="/create-quiz">
            <Button>Get Started</Button>
          </Link>
        </div>
        <div className={`${styles.img}`}>
          <Image priority height={300} src={LANDINGIMAGE} alt="" />
        </div>
      </Wrapper>

      <Wrapper className={`${styles["yellow-bg"]} mt-5 p-5 rounded-4`}>
        <h3 className="fw-bold ">How to use? 🤔</h3>

        <ul>
          <li className="fw-bold">Step 1: Click on <Link className="text-decoration-none" href="/create-quiz">Get Started</Link></li>
          <li className="fw-bold">
            Step 2: Create your quiz by typing in the text box or pasting text
            directly
          </li>
          <li className="fw-bold">
            Step 3: Select and Highlight the text to create a fill-in
          </li>
          <li className="fw-bold">Step 4: Take the test! ✨Good Luck✨</li>
        </ul>

        <h2 className="fw-bold ">It's That Simple!</h2>
      </Wrapper>
    </div>
  );
};

export default Landing;
