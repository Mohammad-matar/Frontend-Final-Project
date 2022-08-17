import React from 'react'
import Background from '../../Component/Background'
import laptop from '../../Images/laptop.png'
import './style.css'

export default function Welcome() {
  return (<>
    <Background />
    <div className='welcome-container'>

      <div className='welcome-content'>
        <h1>Welcome to **** Web  </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and mor
        </p>
        
      </div>

      <div className='welcome-laptop'>
        <img src={laptop} />
      </div>

    </div>
  </>
  )
}