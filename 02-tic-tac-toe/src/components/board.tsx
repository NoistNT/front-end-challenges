import { Tile } from '@/components/tile'

interface Props {
  board: string[]
  combination: number[]
  onClick: (index: number) => void
}

export function Board({ board, combination, onClick }: Props) {
  return (
    <section id="board">
      {board.map((value, index) => (
        <Tile
          key={index}
          aria-label={`Tile ${index + 1}, ${value || 'Empty'}`}
          value={value}
          onClick={() => onClick(index)}
          className={combination.includes(index) ? 'highlight' : ''}
        />
      ))}
    </section>
  )
}
