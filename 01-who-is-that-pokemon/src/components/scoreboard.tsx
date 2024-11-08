import { IScoreboard } from '@/types/types'

export function Scoreboard({ score: { correct, incorrect } }: IScoreboard) {
  return (
    <div className='nes-container with-title is-centered'>
      <h2 className='title'>Score</h2>
      <div id='score-container'>
        <span className='nes-text is-success score'>
          Correct: <span>{correct}</span>
        </span>
        <span className='nes-text is-error score'>
          Incorrect: <span>{incorrect}</span>
        </span>
      </div>
    </div>
  )
}
