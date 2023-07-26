export interface Anime {
  mal_id: number
  url: string
  title: string
  synopsis: string
  images: {
    image_url: string
    small_image_url: string
    large_image_url: string
  }
  episodes: number
  score: number
  genres: Genres[]
}

interface Genres {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}