import type { Crypto } from "../../types/crypto";
import styles from "./CryptoModal.module.css";
import { formatCurrency, formatLargeNumber, } from "../../utils/format";

interface CryptoModalProps {
  crypto: Crypto;
  onClose: () => void;
}

const CryptoModal = ({
  crypto,
  onClose,
}: CryptoModalProps) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{crypto.name}</h2>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar detalhes da criptomoeda"
          >
            ✕
          </button>
        </div>

        <p className={styles.info}>
          <strong>Símbolo:</strong>{" "}
          {crypto.symbol.toUpperCase()}
        </p>

        <p className={styles.info}>
          <strong>Preço:</strong>{" "}
          {formatCurrency(crypto.current_price)}
        </p>

        <p
          className={`${styles.info} ${crypto.price_change_percentage_24h >= 0
              ? styles.positive
              : styles.negative
            }`}
        >
          <strong>Variação 24h:</strong>{" "}
          {crypto.price_change_percentage_24h.toFixed(2)}%
        </p>

        <p className={styles.info}>
          <strong>Market Cap:</strong>{" "}
          {formatLargeNumber(crypto.market_cap)}
        </p>

        <p className={styles.info}>
          <strong>Volume:</strong>{" "}
          {formatLargeNumber(crypto.total_volume)}
        </p>

      </div>
    </div>
  );
};

export default CryptoModal;