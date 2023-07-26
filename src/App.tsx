import { useState } from "react"
import { AnimeCard } from "./components/AnimeCard"
import { Anime } from "./types/anime"

import "./index.css"

export default function App() {
  const [count, setCount] = useState(0)

  function handleButtonClick() {
    setCount(prevState => prevState + 1)
  }

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

  return (
    <>
      <AnimeCard anime={animeMock} />
      <h1>Hello</h1>
      <p data-testid="state-value">{count}</p>
      <button onClick={handleButtonClick}>increase</button>
    </>
  )
}
