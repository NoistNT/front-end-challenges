interface Props {
  onReset: () => void
}

export function ResetButton({ onReset }: Props) {
  return (
    <button id="reset" type="button" onClick={onReset}>
      Play Again
    </button>
  )
}
