import React from "react"

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={`class-${variant}`} { ...rest } >{ children }</button>
  )
}

export default Button