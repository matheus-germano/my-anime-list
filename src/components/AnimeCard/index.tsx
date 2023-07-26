import { Plus, WarningCircle } from "phosphor-react"
import { Anime } from "../../types/anime"

interface AnimeCardProps {
  anime: Anime | null
  isLoading?: boolean
}

export function AnimeCard({ anime, isLoading = false }: AnimeCardProps) {
  if (isLoading) {
    return (
      <div data-testid="anime-card-skeleton">
        <img src={undefined} alt={undefined} />
        <div>
          <p>{undefined}</p>
          <p>{undefined}</p>
        </div>
        <h3>{undefined}</h3>
        <p>{undefined}</p>
      </div>
    )
  }

  if (!anime) {
    return (
      <div data-testid="anime-card-error">
        <WarningCircle size={32} />
        <p>There is an error rendering this anime</p>
      </div>
    )
  }

  return (
    <div 
      data-testid="anime-card"
      className="w-64 h-[456px] bg-zinc-200 flex flex-col rounded-lg overflow-hidden relative"
    >
      <div className="h-2/4">
        <img 
          src={anime.images.image_url}
          alt={anime.title}
          className="h-full w-full object-cover rounded-t-lg"
        />
        <div className="w-full flex justify-between items-center absolute top-0 p-4">
          <p>{anime.score}</p>
          <Plus size={24} />
        </div>
      </div>
      <div className="h-full flex flex-col p-4 gap-4">
        <div className="flex gap-2 items-center">
          {anime.genres.length > 0 ? anime.genres.map(gender => (
            <p
              key={gender.mal_id}
              className="w-fit text-xs p-1 bg-zinc-100 rounded-md"
            >{gender.name}</p>
          )) : (<p>This anime does not has a gender</p>)}
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-black text-lg">{anime.title}</h3>
          <p>{anime.episodes} episodes</p>
        </div>
        <div className="h-full flex flex-col justify-between">
          <p>{anime.synopsis}</p>
          <p>teste</p>
        </div>
      </div>
    </div>
  )
}