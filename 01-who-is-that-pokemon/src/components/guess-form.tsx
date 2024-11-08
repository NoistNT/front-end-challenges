import { GuessResultsDialog } from '@/components/guess-results-dialog'
import { PlayAgainButton } from '@/components/play-again-button'
import { IGuessForm } from '@/types/types'
import { fetchData, sanitizeName } from '@/utils/helpers'
import { useState } from 'react'

export function GuessForm({ name, score, setScore, setPokemon }: IGuessForm) {
  const [guess, setGuess] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!guess) {
      setMessage("Where is the fun if you don't guess?")
      setIsOpen(!isOpen)
      return
    }

    const isCorrect = sanitizeName(guess) === name.toLowerCase()
    if (isCorrect) {
      setScore({ ...score, correct: score.correct + 1 })
      localStorage.setItem('correct', String(score.correct + 1))
    } else {
      setScore({ ...score, incorrect: score.incorrect + 1 })
      localStorage.setItem('incorrect', String(score.incorrect + 1))
    }

    setIsOpen(true)
    setMessage(
      isCorrect ? `${guess} is correct!` : `Incorrect! The answer was '${name}'`
    )
    setGuess('')
    fetchData(setPokemon)
  }

  return (
    <div>
      <form id='guess-form' className='nes-field' onSubmit={handleSubmit}>
        <input
          id='guess-input'
          type='text'
          className='nes-input'
          placeholder='pikachu'
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type='submit' className='nes-btn is-primary'>
          Guess!
        </button>
        <div id='guess-results-container'>
          <GuessResultsDialog
            isOpen={isOpen}
            message={message}
            onClose={() => setIsOpen(!isOpen)}
          />
        </div>
      </form>
      <PlayAgainButton
        setIsOpen={setIsOpen}
        setPokemon={setPokemon}
        setScore={setScore}
      />
    </div>
  )
}
