import { Dispatch, SetStateAction } from 'react'

export interface Pokemon {
  id: number
  name: string
  image: string
}

interface Score {
  correct: number
  incorrect: number
}

export interface IScoreboard {
  score: Score
}

type setPokemon = Dispatch<SetStateAction<Pokemon>>
type setScore = Dispatch<SetStateAction<Score>>

export interface IGuessForm extends IScoreboard {
  name: string
  setScore: setScore
  setPokemon: setPokemon
}

export interface IGuessButton {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setPokemon: setPokemon
  setScore: setScore
}

export interface IGuessResultsDialog {
  isOpen: boolean
  message: string
  onClose: () => void
}
