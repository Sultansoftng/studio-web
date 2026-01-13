import React from 'react'
import BookingHero from '../components/BookingHero'
import StudioBooking from '../components/StudioBooking'
import BookingCard from '../components/BookingCard'

const Bookings = () => {
  return (
    <div className='bg-gray-200'>
        <BookingHero />
        <StudioBooking />
        <BookingCard />
    </div>
  )
}

export default Bookings