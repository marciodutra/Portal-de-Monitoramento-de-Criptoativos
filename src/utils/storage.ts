const FAVORITES_KEY = "crypto-favorites";

export const getFavorites = (): string[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);

  if (!favorites) {
    return [];
  }

  return JSON.parse(favorites);
};


export const saveFavorites = (
  favorites: string[]
): void => {
  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(favorites)
  );
};