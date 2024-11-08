import '@/App.css'
import { GuessForm } from '@/components/guess-form'
import { Scoreboard } from '@/components/scoreboard'
import { Pokemon } from '@/types/types'
import { fetchData } from '@/utils/helpers'
import 'nes.css/css/nes.min.css'
import { useEffect, useState } from 'react'

function App() {
  const [{ name, image }, setPokemon] = useState<Pokemon>({} as Pokemon)
  const [score, setScore] = useState({
    correct: Number(localStorage.getItem('correct')),
    incorrect: Number(localStorage.getItem('incorrect'))
  })

  useEffect(() => {
    fetchData(setPokemon)
  }, [])

  return (
    <main id='main-container' className='nes-container is-centered'>
      <Scoreboard score={score} />
      <h1>Who's that pokemon?</h1>
      <img src={image} alt={name} />
      <GuessForm
        name={name}
        score={score}
        setPokemon={setPokemon}
        setScore={setScore}
      />
    </main>
  )
}

export default App
