import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

import api from '../../services/api'

import Event from '../../components/Event'
import { EventList, Button } from './styles'

export default function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get('events')
      setEvents(data)
    })()
  }, [])

  return (
    <>
      <EventList>
        {events.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </EventList>
      <Link to="/create-event">
        <Button type="button">
          <FaPlus color="#39a3db" size="25" />
        </Button>
      </Link>
    </>
  )
}
