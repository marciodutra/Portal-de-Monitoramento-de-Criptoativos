import { useEffect, useState } from "react";
import { getTopCryptos } from "../services/cryptoService";
import type { Crypto } from "../types/crypto";

export const useCrypto = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);


  const fetchCryptos = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getTopCryptos();

      setCryptos(data);

      setLastUpdated(new Date());

    } catch (err) {

      setError(
        "Erro ao carregar as criptomoedas."
      );

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {
    fetchCryptos();
  }, []);


  return {
    cryptos,
    loading,
    error,
    fetchCryptos,
    lastUpdated,
  };
};