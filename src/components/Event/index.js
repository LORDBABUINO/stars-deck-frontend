import React from 'react'
import { Container } from './styles'

export default function Event({ event: { name, local, date, description } }) {
  return (
    <Container>
      <span>{name}</span>
      <span>{local}</span>
      <span>{date}</span>
      <span>{description}</span>
    </Container>
  )
}
