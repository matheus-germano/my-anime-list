import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import { FavoriteAnimeButton } from "."

describe("FavoriteAnimeButton component", () => {
  it("should render component", () => {
    render(<FavoriteAnimeButton handleFavoriteButtonClick={() => {}} />)
  })

  it("should execute button click handler", () => {
    const buttonClickHandler = jest.fn();

    render(<FavoriteAnimeButton handleFavoriteButtonClick={buttonClickHandler} />)

    const favoriteButton = screen.getByTestId("favorite-anime-button")

    favoriteButton.click()
    expect(buttonClickHandler).toBeCalledTimes(1)
  })

  it("should be filled with red if is favorited", () => {
    const buttonClickHandler = jest.fn();

    render(<FavoriteAnimeButton handleFavoriteButtonClick={buttonClickHandler} isFavorited />)

    const favoriteButtonIcon = screen.getByTestId("favorite-anime-button-icon")
    expect(favoriteButtonIcon).toHaveStyle({
      color: "#EF4444"
    })
  })
})