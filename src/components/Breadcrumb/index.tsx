"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "@revisela/store";
import {
  quizActions,
  selectIsResultActive,
} from "@revisela/store/slices/quizSlice";
import BackIcon from "@revisela/assets/icons/BackIcon";
import ClipboardIcon from "@revisela/assets/images/clipboard-icon.svg";

import styles from "./index.module.css";

interface BreadcrumbProps {}

const Breadcrumb = (props: BreadcrumbProps) => {
  const isResultActive = useSelector(selectIsResultActive);

  const dispatch = useDispatch();
  const handleViewScorecard = () => {
    dispatch(quizActions.openResultModal());
  };

  const router = useRouter();
  return (
    <div>
      {isResultActive ? (
        <>
          <div className="d-flex align-items-center justify-content-between">
            <button
              onClick={() => dispatch(quizActions.resetResultState())}
              className={styles["breadcrumb-button"]}
            >
              <span className={styles["icon-wrap"]}>
                <BackIcon />
              </span>{" "}
              Retake Test
            </button>
            <button
              onClick={handleViewScorecard}
              className={styles["breadcrumb-button"]}
            >
              <span className={styles["icon-wrap"]}>
                <Image alt="revisela" src={ClipboardIcon} />
              </span>{" "}
              View Scorecard
            </button>
          </div>
        </>
      ) : (
        <div className="d-flex">
          <button
            onClick={() => router.back()}
            className={styles["breadcrumb-button"]}
          >
            <span className={styles["icon-wrap"]}>
              <BackIcon />
            </span>{" "}
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
