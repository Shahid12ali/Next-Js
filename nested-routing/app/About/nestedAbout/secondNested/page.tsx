import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
        <h1>Second Nested Page</h1>
        <br />
        <br />
        <Link href="/">Go To Home Page</Link>
    </div>
  )
}

export default page