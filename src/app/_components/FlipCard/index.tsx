import styles from "./index.module.css";

interface FlipCardProps {
  frontBody: React.ReactNode;
  backBody: React.ReactNode;
  showAnswer: boolean;
  onClick: () => void;
}

const FilpCard = ({ frontBody, backBody, showAnswer, onClick }: FlipCardProps) => {
  return (
    <div onClick={onClick} className={`${styles.card} ${showAnswer ? styles.flipped : ""}`}>
      <div className={styles.front}>{frontBody}</div>
      <div className={styles.back}>{backBody}</div>
    </div>
  );
};

export default FilpCard;
