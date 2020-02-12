import React from 'react'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { Container } from './styles'

export default function Event({ event: { name, local, date, description } }) {
  return (
    <Container>
      <h1>{name}</h1>
      <span>
        {local} -{' '}
        {format(parseISO(date), "dd/MM/yyyy', às' H:mm'h'", {
          locale: pt,
        })}
      </span>
      <p>{description}</p>
    </Container>
  )
}
