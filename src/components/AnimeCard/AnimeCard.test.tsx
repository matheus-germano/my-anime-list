import { render, screen } from "@testing-library/react";
import { Anime } from "../../types/anime";
import { AnimeCard } from ".";

const animeMock: Anime = {
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
  genres: [
    {
      mal_id: 1,
      type: "anime",
      name: "Action",
      url: "https://myanimelist.net/anime/genre/1/Action",
    }
  ]
}

describe('AnimeCard component', () => {
  it('should render card', () => {
    render(<AnimeCard anime={animeMock} />)

    screen.getByTestId("anime-card")
  })

  it('should render with anime data', () => {
    render(<AnimeCard anime={animeMock} />)

    const image = document.querySelector("img") as HTMLImageElement;
    expect(image.src).toContain(animeMock.images.image_url);
    screen.getByText(animeMock.title)
    screen.getByText(animeMock.synopsis)
    screen.getByText(animeMock.episodes.toString())
    screen.getByText(animeMock.score.toString())
  })

  it('should render skeleton component when loading', () => {
    render(<AnimeCard anime={null} isLoading={true} />)

    screen.getByTestId("anime-card-skeleton")
  })

  it('should render a error card when anime is null and loading is false', () => {
    render(<AnimeCard anime={null} />)

    screen.getByTestId("anime-card-error")
  })
})