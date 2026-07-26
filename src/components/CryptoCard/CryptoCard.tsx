import type { Crypto } from "../../types/crypto";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styles from "./CryptoCard.module.css";
import { formatCurrency } from "../../utils/format";

interface CryptoCardProps {
  crypto: Crypto;
  favorite: boolean;
  onToggleFavorite: () => void;
  onClick: () => void;
}

const CryptoCard = ({
  crypto,
  favorite,
  onToggleFavorite,
  onClick,
}: CryptoCardProps) => {

  return (
    <div
      className={styles.card}
      onClick={onClick}
    >
      <FavoriteButton
        favorite={favorite}
        onToggle={onToggleFavorite}
      />

      <h2 className={styles.name}>
        {crypto.name}
      </h2>

      <p className={styles.info}>
        Símbolo: {crypto.symbol.toUpperCase()}
      </p>

      <p className={styles.info}>
        Preço: {formatCurrency(crypto.current_price)}
      </p>

      <p
        className={
          crypto.price_change_percentage_24h >= 0
            ? styles.positive
            : styles.negative
        }
      >
        Variação 24h:
        {" "}
        {crypto.price_change_percentage_24h.toFixed(2)}%
      </p>
    </div>
  );
};

export default CryptoCard;