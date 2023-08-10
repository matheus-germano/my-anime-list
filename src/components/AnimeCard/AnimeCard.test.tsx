import { render, screen } from "@testing-library/react";

import { AnimeCard } from ".";

import { animeMock, animeWithoutGenresMock } from "../../mocks/anime";

describe("AnimeCard component", () => {
  it("should render card", () => {
    render(<AnimeCard anime={animeMock} />)

    screen.getByTestId("anime-card")
  })

  it("should render with anime data", () => {
    render(<AnimeCard anime={animeMock} />)

    const image = document.querySelector("img") as HTMLImageElement;
    expect(image.src).toContain(animeMock.images.image_url);
    screen.getByText(animeMock.title)
    screen.getByText(animeMock.synopsis)
    screen.getByText(animeMock.episodes.toString().padStart(4, "0") + " episodes")
    screen.getByText(animeMock.score.toString())
  })

  it("should show a message if anime does not have any genres", () => {
    render(<AnimeCard anime={animeWithoutGenresMock} />)

    screen.getByText("This anime does not has a gender");
  })

  it("should render skeleton component when loading", () => {
    render(<AnimeCard anime={null} isLoading={true} />)

    screen.getByTestId("anime-card-skeleton")
  })

  it("should render a error card when anime is null and loading is false", () => {
    render(<AnimeCard anime={null} />)

    screen.getByTestId("anime-card-error")
  })
})