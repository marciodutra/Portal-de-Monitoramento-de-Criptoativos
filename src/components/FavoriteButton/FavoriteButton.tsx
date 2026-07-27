import { Star } from "lucide-react";
import styles from "./FavoriteButton.module.css";

interface FavoriteButtonProps {
  favorite: boolean;
  onToggle: () => void;
}

const FavoriteButton = ({
  favorite,
  onToggle,
}: FavoriteButtonProps) => {
  return (
    <button
      className={`${styles.button} ${
        favorite ? styles.active : ""
      }`}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      aria-label="Favoritar criptomoeda"
      type="button"
    >
      <Star
        size={26}
        fill={favorite ? "currentColor" : "none"}
      />
    </button>
  );
};

export default FavoriteButton;