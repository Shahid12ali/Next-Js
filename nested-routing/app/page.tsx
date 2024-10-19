'use client'
import React from 'react'
import Link from 'next/link'


const Home = () => {
    
  return (
    <div className='items-center text-center'>
        <h1><b>Wellcome To Next.Js Home Page</b></h1>
        <br />
        <Link href="/About">Go To About Page Link</Link>
        <br />
        <Link href="/Login">Go To Login Page Link</Link>
        <br />
        <br />
        <Link href="/About/nestedAbout">Nested About Page</Link>
        <br />
        <br />
        <Link href="/About/nestedAbout/secondNested"> Second Nested About Page</Link>
        
    </div>
  )
}

export default Home
