import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { addHours } from 'date-fns'
import { IMaskInput } from 'react-imask'

import api from '../../services/api'

import { Form, ButtonContainer } from './styles'

export default function CreateEvent() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [local, setLocal] = useState('')
  const [hour, setHour] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const addEvent = async e => {
    e.preventDefault()
    await api.post('/events', {
      name,
      local,
      description,
      date: addHours(
        new Date(
          date
            .split('/')
            .reverse()
            .join('-')
        ),
        Number(hour) + 3
      ),
    })

    history.push('/')
  }

  return (
    <Form onSubmit={addEvent}>
      <input
        type="text"
        placeholder="Nome do Evento"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <input
        type="text"
        placeholder="Local"
        value={local}
        onChange={({ target: { value } }) => setLocal(value)}
      />
      <IMaskInput
        type="text"
        mask="00/00/0000"
        placeholder="Data"
        value={date}
        onChange={({ target: { value } }) => setDate(value)}
      />
      <IMaskInput
        type="text"
        mask="00"
        placeholder="Horário"
        value={hour}
        onChange={({ target: { value } }) => setHour(value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={({ target: { value } }) => setDescription(value)}
      />
      <ButtonContainer>
        <button type="submit">Adicionar</button>
        <Link to="/">
          <button type="button">Cancelar</button>
        </Link>
      </ButtonContainer>
    </Form>
  )
}
