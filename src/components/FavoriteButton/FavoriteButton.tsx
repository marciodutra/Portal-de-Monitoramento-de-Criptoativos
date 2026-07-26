interface FavoriteButtonProps {
  favorite: boolean;
  onToggle: () => void;
}

const FavoriteButton = ({
  favorite,
  onToggle,
}: FavoriteButtonProps) => {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
    >
      {favorite ? "⭐" : "☆"}
    </button>
  );
};

export default FavoriteButton;