import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { RefreshCw, Star } from "lucide-react";
import styles from "./Header.module.css";

interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onRefresh: () => void;
  loading: boolean;
  favoritesCount: number;
  lastUpdated: Date | null;
}

const Header = ({
  search,
  setSearch,
  onRefresh,
  loading,
  favoritesCount,
  lastUpdated,
}: HeaderProps) => {
  return (
    <header className={styles.container}>

      <h1 className={styles.title}>
        Crypto Monitor
      </h1>


      <p className={styles.subtitle}>
        Acompanhe em tempo real as principais criptomoedas do mercado.
      </p>


      <div className={styles.infoContainer}>

        {lastUpdated && (
          <div className={styles.updateBadge}>
            ⏱ Última atualização:{" "}
            {lastUpdated.toLocaleTimeString("pt-BR")}
          </div>
        )}

        <div className={styles.favoriteBadge}>

          <Star
            size={18}
            fill="currentColor"
          />

          {favoritesCount} favoritos

        </div>

      </div>


      <div className={styles.actions}>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />


        <Button
          onClick={onRefresh}
          disabled={loading}
        >

          <RefreshCw
            size={18}
            className={loading ? styles.spin : ""}
          />

          {loading
            ? "Atualizando..."
            : "Atualizar"
          }

        </Button>

      </div>

    </header>
  );
};

export default Header;