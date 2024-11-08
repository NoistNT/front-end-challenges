import { IGuessResultsDialog } from '@/types/types'

export function GuessResultsDialog({
  isOpen,
  message,
  onClose
}: IGuessResultsDialog) {
  return (
    <dialog open={isOpen} className='nes-dialog' id='dialog-default'>
      <form method='dialog'>
        <p className='title'>Guess Results</p>
        <p>{message}</p>
        <menu className='dialog-menu'>
          <button
            id='continue-button'
            type='button'
            className='nes-btn is-primary'
            onClick={onClose}
          >
            Continue
          </button>
        </menu>
      </form>
    </dialog>
  )
}
