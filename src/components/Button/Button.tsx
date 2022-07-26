import React from 'react'

interface Props{
    label:string
}
export default function Button(props:Props) {
    const {label} = props
  return (
    <div>{label}</div>
  )
}
