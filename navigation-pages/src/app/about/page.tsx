'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const route = useRouter();
  return (
    <div>
        <h1>About Page</h1>
        <br />

        <button onClick={() => route.push('/')}>Go to Home Page Button</button>
        
    </div>
  )
}

export default page