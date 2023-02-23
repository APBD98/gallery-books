import React, {useState, useRef} from 'react'
import background from "../../images/book.jpg"
import Card from '../card/Card'
import axios from 'axios';
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import {auth} from "../../config/firebase/firebase"
import { useNavigate } from 'react-router';
import ModalComponent from '../Modal/Modal';


function Main() {
  const [modalShow, setModalShow] = useState(false)
  const[searchs, setSearch] = useState("");
  const[bookData, setBookData] = useState([]);
  const [detail, setDetail] = useState({})
  const navigate = useNavigate()
  const logo = useSelector((state) => state.user.logo)
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)


  const logoutUser = () =>{
    signOut(auth).then(() => {
      navigate('/login')
    }).catch((error) => {
      console.log(error)
    });
  }

  const searchBooks = () =>{
    setIsActive(true)
    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchs}&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA`)
    .then(response => setBookData(response.data.items))
    setTimeout(() => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    }, 1000);
    
    
  }

  const handleDetail = (data) => {
    setDetail(data.volumeInfo)
    setModalShow(true)
  }
  return (
    <div className="main">
        <div className="header" 
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          height:'100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100%'
          }}>
          <div className="logo">
            <h1>{logo}</h1>
          </div>
          <p>"For me, life is too short to pass up mediocrity"<br/><span style={{borderBottom:'1px solid grey'}}>Perahu Kertas, Dewi Dee Lestari.</span></p>
          <div className="search">
              <h2>What's your favorite books?</h2>
              <input type="text" placeholder="Type in here..." value={searchs} onChange={e => setSearch(e.target.value)}/>
              <button onClick={searchBooks}>Search</button>
              
          </div>

          
          <button onClick={logoutUser} className='logout-button'>Log out</button>
        </div>
        <div ref={ref} className='content' style={{display:isActive?'flex':'none'}}>
          {
            bookData?.map(data=>(
              <Card key={data.id} image={data.volumeInfo.imageLinks === undefined ? "": data.volumeInfo.imageLinks.thumbnail} title={data.volumeInfo.title} author={data.volumeInfo.authors} date={data.volumeInfo.publishedDate} publisher={data.volumeInfo.publisher} handleDetail={handleDetail} data={data} />
              ))
          }
        </div>
        <ModalComponent 
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={detail.title}
        image={detail.imageLinks === undefined ? "": detail.imageLinks.thumbnail}
        author={detail.authors}
        publisher={detail.publisher}
        date={detail.publishedDate}
        desc={detail.description}/>
    </div>
  )
}

export default Main