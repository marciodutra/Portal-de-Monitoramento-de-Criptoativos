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
  const isPositive =
    crypto.price_change_percentage_24h >= 0;

  return (
    <div
      className={styles.card}
      onClick={onClick}
    >

      <div className={styles.header}>
        <div>
          <h2 className={styles.name}>
            {crypto.name}
          </h2>

          <span className={styles.symbol}>
            {crypto.symbol.toUpperCase()}
          </span>
        </div>

        <FavoriteButton
          favorite={favorite}
          onToggle={onToggleFavorite}
        />
      </div>


      <div className={styles.priceSection}>
        <span className={styles.label}>
          Preço atual
        </span>

        <strong className={styles.price}>
          {formatCurrency(crypto.current_price)}
        </strong>
      </div>


      <div
        className={
          isPositive
            ? styles.positive
            : styles.negative
        }
      >
        {isPositive ? "▲" : "▼"}

        {" "}

        {crypto.price_change_percentage_24h.toFixed(2)}%

        <span className={styles.changeLabel}>
          {" "}últimas 24h
        </span>
      </div>


      <div className={styles.footer}>
        Clique para ver detalhes →
      </div>

    </div>
  );
};

export default CryptoCard;