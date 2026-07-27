import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({
  search,
  setSearch,
}: SearchBarProps) => {
  return (
    <div className={styles.container}>

      <Search
        className={styles.icon}
        size={20}
      />

      <input
        className={styles.input}
        type="text"
        placeholder="Pesquise por nome ou símbolo..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

    </div>
  );
};

export default SearchBar;