import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import styles from "./Header.module.css";

interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onRefresh: () => void;
  loading: boolean;
}

const Header = ({
  search,
  setSearch,
  onRefresh,
  loading,
}: HeaderProps) => {
  return (
    <header className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>🚀 Crypto Monitor</h1>

        <p className={styles.subtitle}>
          Acompanhe em tempo real as principais criptomoedas do mercado.
        </p>
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
          {loading ? "Atualizando..." : "🔄 Atualizar"}
        </Button>
      </div>
    </header>
  );
};

export default Header;