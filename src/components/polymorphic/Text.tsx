import React from "react"

type TextPropsType<T> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: T
}

type TextProps<T extends React.ElementType> = TextPropsType<T> & Omit<React.ComponentProps<T>, keyof TextPropsType<T>>

export const Text = <T extends React.ElementType = 'div'>({size, color, children, as}: TextProps<T>) => {
    const Component = as || 'div'
  return (
    <Component className={`class-${size}-${color}`}>{children}</Component>
  )
}
