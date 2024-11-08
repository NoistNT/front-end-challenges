import { IGuessButton } from '@/types/types'
import { fetchData } from '@/utils/helpers'

export function PlayAgainButton({
  setIsOpen,
  setPokemon,
  setScore
}: IGuessButton) {
  const handlePlayAgain = () => {
    localStorage.clear()
    setScore({ correct: 0, incorrect: 0 })
    setIsOpen(false)
    fetchData(setPokemon)
  }
  return (
    <button
      id='play-again-button'
      className='nes-btn'
      onClick={handlePlayAgain}
    >
      Play Again
    </button>
  )
}
