interface Props {
  winner: string | null
  draw: boolean
  isXNext: boolean
}

export function Status({ winner, draw, isXNext }: Props) {
  if (winner) return <h2 id="winner">Winner: {winner}</h2>
  if (draw) return <h2 id="draw">Draw</h2>
  return <h2>Next player: {isXNext ? 'X' : 'O'}</h2>
}
