import { AnimeCard } from "./components/AnimeCard"

import { animeMock } from "./mocks/anime"

import "./index.css"

export default function App() {
  return (
    <>
      <AnimeCard anime={animeMock} />
    </>
  )
}
