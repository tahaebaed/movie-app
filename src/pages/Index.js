import React, { useState } from 'react'
import NavBar from '../layout/NavBar'
import RoutesRoot from '../routes/RoutesRoot'

const Index = () => {
  const [query, setQuery] = useState('')
  return (
    <>
      <NavBar query={query} setQuery={setQuery} />
      <section className='container'>
        <RoutesRoot query={query} />
      </section>
    </>
  )
}

export default Index
