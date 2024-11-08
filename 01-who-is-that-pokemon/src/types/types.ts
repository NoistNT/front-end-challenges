import React from 'react'

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

export interface IGuessForm extends IScoreboard {
  name: string
  setScore: React.Dispatch<React.SetStateAction<Score>>
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
}

export interface IGuessButton {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
  setScore: React.Dispatch<React.SetStateAction<Score>>
}

export interface IGuessResultsDialog {
  isOpen: boolean
  message: string
  onClose: () => void
}
