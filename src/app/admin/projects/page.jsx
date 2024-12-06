import React from 'react'
import Link from 'next/link'

const page = () => {
  // Project List
  return (
    <div className="mb-8">
    <h1 className="text-4xl font-bold mb-4">Admin Page Two</h1>
    <p className="text-gray-600">
      To Navigate to <Link href="/client" className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200">Website</Link>
    </p>
    <p className="text-gray-600 mt-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque voluptate laborum saepe! Enim molestias cupiditate vel quas iste. Fuga facere molestiae et ducimus sequi maiores sunt vel nihil nobis, doloremque, eos, dignissimos illum. Ullam adipisci ipsum rem a, necessitatibus recusandae explicabo possimus repellat! Alias, officiis!
    </p>
  </div>
  )
}

export default page