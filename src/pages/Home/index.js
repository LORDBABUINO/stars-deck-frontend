import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import Event from '../../components/Event'
import { EventList } from './styles'

export default function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get('events')
      console.log(data)
      setEvents(data)
    })()
  }, [])

  return (
    <EventList>
      {events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </EventList>
  )
}
