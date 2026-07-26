import { useState } from "react";
import {
  getFavorites,
  saveFavorites,
} from "../utils/storage";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(
    getFavorites()
  );


  const addFavorite = (id: string) => {
    const updatedFavorites = [
      ...favorites,
      id,
    ];

    setFavorites(updatedFavorites);

    saveFavorites(updatedFavorites);
  };


  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite !== id
    );

    setFavorites(updatedFavorites);

    saveFavorites(updatedFavorites);
  };


  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };


  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};