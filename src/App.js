import { useEffect, useRef, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

import React from 'react'
import Show from './Show'
import Star from './Star';
import './App.css'
function App() {

  const [list, setList] = useState([
    { name: "harry potter", rate: "2.5", imgsr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaGGnLFf3A9kBUzT20RLhGhPCfzUtKhE-MrcEOj5aH5bL1vnTQBqxrsJnnbOc7puswYI&usqp=CAU" },
    { name: "Pocker face", rate: "4", imgsr: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKhCIO1thJahnwfyeHfYrvVrUlP7Ft_5vJQ&usqp=CAU" },
    { name: "Time out", rate: "4.5", imgsr: "https://fr.web.img4.acsta.net/medias/nmedia/18/85/59/68/19816803.jpg" }
  ])

  const [filtredList, setFilter] = useState(list)

  useEffect(()=>{
    setFilter(list)
  }, [list])

  const search =useRef()

  const filtrer=()=>{
    setFilter(list.filter(e => e.name.toUpperCase().includes(search.current.value.toUpperCase())))

  }
  const [rating,setRating]=useState()

const onStarClick=(x)=>{
  setFilter(list.filter(e => e.rate>=x))
}
  
return (
    <div className='App'>

      <div className='navbar'>
        <input type={"search"} placeholder="enter your search" ref={search} onChange={filtrer}></input>

        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick = {onStarClick}
       
        />
      </div>



      <div className='movieList'>

        {filtredList.map(e => <p>


          <img src={e.imgsr} /><br />

          <div>
            {e.name}<br />
            <Star rate={e.rate} ></Star>
          </div>
        </p>)
        }
      </div>
      <Show list={list} setList={setList}></Show>

    </div>
  )
}

export default App
