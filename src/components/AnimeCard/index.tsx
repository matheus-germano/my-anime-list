import { Heart, Star, WarningCircle } from "phosphor-react"

import { Button } from "../Button"

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
      className="w-64 bg-zinc-200 flex flex-col rounded-lg overflow-hidden relative"
    >
      <div className="h-2/4">
        <img 
          src={anime.images.image_url}
          alt={anime.title}
          className="h-64 w-full object-cover rounded-t-lg"
        />
        <div className="w-full flex justify-between items-center absolute top-0 p-4">
          <div className="flex gap-1 items-center bg-zinc-900 bg-opacity-50 border border-solid border-zinc-600 rounded-lg p-2">
            <p className="text-zinc-50">{anime.score}</p>
            <Star className="text-yellow-300" size={20} weight="fill" />
          </div>
          <div className="flex gap-1 items-center bg-zinc-900 bg-opacity-50 border border-solid border-zinc-600 rounded-lg p-2">
            <Heart className="text-zinc-50 hover:text-red-500 cursor-pointer" size={20} />
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col p-4 gap-4">
        <div className="flex gap-2 items-center">
          {anime.genres.length > 0 ? anime.genres.map(gender => (
            <p
              key={gender.mal_id}
              className="w-fit text-xs p-2 text-zinc-700 bg-zinc-100 rounded-md border border-solid border-white"
            >{gender.name}</p>
          )) : (<p>This anime does not has a gender</p>)}
        </div>
        <div className="flex flex-col justify-between items-start">
          <h3 className="font-black text-lg text-ellipsis overflow-hidden">{anime.title}</h3>
          <p className="text-xs text-zinc-700">{String(anime.episodes).padStart(4, "0") + " episodes"}</p>
        </div>
        <div className="h-full flex flex-col gap-3 justify-between">
          <p className="text-zinc-700 text-ellipsis overflow-hidden line-clamp-3 text-justify">{anime.synopsis}</p>
          <Button>Avaliar</Button>
        </div>
      </div>
    </div>
  )
}