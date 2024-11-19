import { Board } from '@/components/board'
import { Footer } from '@/components/footer'
import { ResetButton } from '@/components/reset-button'
import { Status } from '@/components/status'
import { checkWin } from '@/helpers/helpers'
import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const initialBoard: string[] = Array(9).fill(null)
  const [board, setBoard] = useState(initialBoard)
  const [isXNext, setIsXNext] = useState(true)

  const { winner, combination } = useMemo(() => checkWin(board), [board])
  const draw = useMemo(() => !winner && board.every(Boolean), [board, winner])

  const handleClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'
    setBoard(newBoard)
    setIsXNext(!isXNext)
  }

  const onReset = () => {
    setBoard(initialBoard)
    setIsXNext(true)
  }

  return (
    <div>
      <header>
        <h1>Tic Tac Toe</h1>
        <Status winner={winner} draw={draw} isXNext={isXNext} />
      </header>
      <main>
        <Board board={board} combination={combination} onClick={handleClick} />
        <ResetButton onReset={onReset} />
      </main>
      <Footer />
    </div>
  )
}

export default App
