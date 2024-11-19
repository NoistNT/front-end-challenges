interface Props {
  value: string | null
  className?: string
  onClick: () => void
}

export function Tile({ value, className, onClick }: Props) {
  return (
    <button
      className={`tile ${className}`}
      type="button"
      disabled={!!value}
      onClick={onClick}
    >
      {value}
    </button>
  )
}
