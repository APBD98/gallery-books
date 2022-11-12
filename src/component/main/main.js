import React, {useState, Fragment} from 'react'
import "./main.css"
import background from "../../images/book.jpg"
import Card from '../card/Card'
import axios from 'axios';
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import {auth} from "../../config/firebase/firebase"
import { useNavigate } from 'react-router';

function Main() {
  const[searchs, setSearch] = useState("coding");
  const[bookData, setBookData] = useState([]);
  const navigate = useNavigate()
  const logo = useSelector((state) => state.user.logo)
  const user = useSelector((state) => state.user.email);


  const logoutUser = () =>{
    signOut(auth).then(() => {
      navigate('/login')
    }).catch((error) => {
      console.log(error)
    });
  }

  const searchBooks = () =>{
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchs}&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA`)
    .then(response => setBookData(response.data.items))
  }
  return (
    <div className="main">
        <div className="header" style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat',height:'600px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
          <div className="logo">
            <h1 className='logo'>{logo}</h1>
          </div>
          <h1>"For me, life is too short to pass up mediocrity"<br/><span>Perahu Kertas, Dewi Dee Lestari.</span></h1>
          <div className="search">
              <h2>What's your favorite books?</h2>
              <input type="text" placeholder="Type in here..." value={searchs} onChange={e => setSearch(e.target.value)}/>
              <button onClick={searchBooks}>Search</button>
              
          </div>

          <div className="user-display">
            <h2>hei, {user}</h2>
            <button onClick={logoutUser}>Log out</button>
          </div>
        </div>
        <div className='content'>
          {
            bookData.map(data=>(
              <Card key={data.id} image={data.volumeInfo.imageLinks.smallThumbnail} title={data.volumeInfo.title} author={data.volumeInfo.authors} year={data.volumeInfo.publishedDate} publisher={data.volumeInfo.publisher}/>
              ))
          }
        </div>
    </div>
  )
}

export default Main