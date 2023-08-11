import { Heart } from "phosphor-react";

interface FavoriteAnimeButtonProps {
  isFavorited?: boolean;
  handleFavoriteButtonClick: () => void
}

export function FavoriteAnimeButton({ isFavorited = false, handleFavoriteButtonClick }: FavoriteAnimeButtonProps) {
  const heartClass = isFavorited ? "text-red-500 hover:text-red-600 " : "text-zinc-50 hover:text-red-500 "

  return (
    <div
      data-testid="favorite-anime-button"
      onClick={handleFavoriteButtonClick}
      className="flex gap-1 items-center bg-zinc-900 bg-opacity-50 border border-solid border-zinc-600 rounded-lg p-2"
    >
      <Heart
        data-testid="favorite-anime-button-icon"
        className={heartClass + "cursor-pointer"}
        size={20}
        weight={isFavorited ? "fill" : "regular"}
      />
    </div>
  )
}