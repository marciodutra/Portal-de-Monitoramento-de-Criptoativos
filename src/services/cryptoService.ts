import { api } from "./api";

export const getTopCryptos = async () => {
  const response = await api.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 10,
      page: 1,
      sparkline: false,
    },
  });

  return response.data;
};