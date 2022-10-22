import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

export default function Card(book) {
    console.log(book)
    const [list, setList] =useState([])

  return (
    <div className='card-box'>
        <img src={book.image}/>
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <p>{book.year}</p>
        <p>{book.publisher}</p>
    </div>
  )
}
