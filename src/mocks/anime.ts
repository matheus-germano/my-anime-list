import { Anime } from "../types/anime";

export const animeMock: Anime = {
  mal_id: 1,
  url: "https://myanimelist.net/anime/1/Cowboy_Bebop",
  title: "Anime mock",
  synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue ornare imperdiet. Phasellus massa nisl, luctus et nibh ac, aliquam varius nulla. Integer mattis quam nec turpis mattis, a tincidunt libero pretium. Phasellus vel turpis sed massa venenatis ultrices in id orci. Integer lorem velit, aliquet ac mauris id, scelerisque pellentesque ligula. Nunc at metus ornare, sollicitudin ipsum in, finibus ipsum. Etiam sodales nisl pellentesque orci sodales vulputate. Integer urna ipsum, placerat eget venenatis non, fermentum et justo. Cras gravida arcu id massa fermentum elementum.",
  images: {
    image_url: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
    small_image_url: "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
    large_image_url: "https://cdn.myanimelist.net/images/anime/4/19644l.jpg"
  },
  episodes: 26,
  score: 8.75,
  genres: [
    {
      mal_id: 1,
      type: "anime",
      name: "Action",
      url: "https://myanimelist.net/anime/genre/1/Action",
    },
    {
      mal_id: 2,
      type: "anime",
      name: "Adventure",
      url: "https://myanimelist.net/anime/genre/2/Adventure",
    },
  ]
}

export const animeWithoutGenresMock: Anime = {
  mal_id: 1,
  url: "https://myanimelist.net/anime/1/Cowboy_Bebop",
  title: "Anime mock",
  synopsis: "Anime mock synopsis",
  images: {
    image_url: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
    small_image_url: "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
    large_image_url: "https://cdn.myanimelist.net/images/anime/4/19644l.jpg"
  },
  episodes: 26,
  score: 8.75,
  genres: []
}