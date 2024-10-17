'use client'
import React from 'react'
import { useRouter } from "next/navigation";

const login = () => {
  const router = useRouter();
  return (
    <div>
        <h1>Login Page</h1>
        <br />
        
        <button onClick={() => router.push('/')}>Go to Home Page Button</button>
    </div>
  )
}

export default login