import React, { useState, useEffect, Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Card({title, image, author, date, handleDetail, data}) {

  return (
    <div className='card-box'>
        <img src={image}/>
        <p className='title'>"{title}"</p>
        <p className='author'>{author}</p>
        <p>{date}</p>
        <button onClick={() => handleDetail(data)}>Details</button>
    </div>
    
  )
}

export default Card