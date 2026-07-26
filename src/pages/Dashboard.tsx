import { useState } from "react";
import type { Crypto } from "../types/crypto";
import Header from "../components/Header/Header";
import CryptoCard from "../components/CryptoCard/CryptoCard";
import { useFavorites } from "../hooks/useFavorites";
import { useCrypto } from "../hooks/useCrypto";
import CryptoModal from "../components/CryptoModal/CryptoModal";

const Dashboard = () => {
  const {
    cryptos,
    loading,
    error,
    fetchCryptos,
  } = useCrypto();

  const [search, setSearch] = useState("");

  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);

  const {
    isFavorite,
    addFavorite,
    removeFavorite,
  } = useFavorites();

  const filteredCryptos = cryptos.filter((crypto) => {
    return (
      crypto.name.toLowerCase().includes(search.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
  <div
    style={{
      maxWidth: "1100px",
      margin: "40px auto",
      padding: "20px",
    }}
  >
    {selectedCrypto && (
      <CryptoModal
        crypto={selectedCrypto}
        onClose={() => setSelectedCrypto(null)}
      />
    )}

    <Header
      search={search}
      setSearch={setSearch}
      onRefresh={fetchCryptos}
      loading={loading}
    />

    <h2
      style={{
        marginBottom: "20px",
        color: "#374151",
      }}
    >
      Top 10 Criptomoedas
    </h2>

    {filteredCryptos.map((crypto) => (
      <CryptoCard
        key={crypto.id}
        crypto={crypto}
        favorite={isFavorite(crypto.id)}
        onToggleFavorite={() =>
          isFavorite(crypto.id)
            ? removeFavorite(crypto.id)
            : addFavorite(crypto.id)
        }
        onClick={() =>
          setSelectedCrypto(
            selectedCrypto?.id === crypto.id
              ? null
              : crypto
          )
        }
      />
    ))}
  </div>
);
};

export default Dashboard;