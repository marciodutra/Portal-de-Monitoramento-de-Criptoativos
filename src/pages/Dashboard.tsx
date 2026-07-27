import { useState } from "react";
import type { Crypto } from "../types/crypto";
import Header from "../components/Header/Header";
import CryptoCard from "../components/CryptoCard/CryptoCard";
import { useFavorites } from "../hooks/useFavorites";
import { useCrypto } from "../hooks/useCrypto";
import CryptoModal from "../components/CryptoModal/CryptoModal";
import SkeletonCard from "../components/SkeletonCard/SkeletonCard";
import Toast from "../components/Toast/Toast";


const Dashboard = () => {

  const {
    cryptos,
    loading,
    error,
    fetchCryptos,
    lastUpdated,
  } = useCrypto();


  const [search, setSearch] = useState("");

  const [toast, setToast] = useState("");

  const [selectedCrypto, setSelectedCrypto] =
    useState<Crypto | null>(null);



  const {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
  } = useFavorites();



  const filteredCryptos = cryptos.filter((crypto) => {

    return (
      crypto.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      crypto.symbol
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  });



  const showToast = (message: string) => {

    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);

  };



  if (error) {
    return <h2>{error}</h2>;
  }



  if (loading) {

    return (
      <div className="crypto-grid">

        {Array.from({ length: 10 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}

      </div>
    );

  }



  return (

    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
      }}
    >


      {toast && (
        <Toast message={toast} />
      )}



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

        favoritesCount={favorites.length}

        lastUpdated={lastUpdated}

      />



      <h2
        style={{
          marginBottom: "20px",
          color: "#374151",
        }}
      >
        Top 10 Criptomoedas
      </h2>




      <div className="crypto-grid">


        {filteredCryptos.map((crypto) => (

          <CryptoCard

            key={crypto.id}

            crypto={crypto}

            favorite={isFavorite(crypto.id)}


            onToggleFavorite={() => {


              if (isFavorite(crypto.id)) {


                removeFavorite(crypto.id);


                showToast(
                  `${crypto.name} removida dos favoritos`
                );


              } else {


                addFavorite(crypto.id);


                showToast(
                  `${crypto.name} adicionada aos favoritos`
                );


              }


            }}



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


    </div>

  );

};


export default Dashboard;