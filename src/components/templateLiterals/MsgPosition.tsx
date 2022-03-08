type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'
type PositionProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'> | 'center'
}

function MsgPosition({ position }: PositionProps) {
  return (
    <div>MsgPosition: { position }</div>
  )
}

export default MsgPosition