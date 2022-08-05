import React from 'react'
import Background from '../../Component/Background'
import laptop from '../../Images/laptop.png'
import Group2 from '../../Images/Group2.png'
import './style.css'

export default function Welcome() {
  return (<>
    <Background />
    <div className='welcome-title'>
      <img src={Group2}/>
      <h1> Matarov</h1>
    </div>
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
        <button className='welcome-btn'> Go To The Web</button>
      </div>

      <div className='welcome-laptop'>
        <img src={laptop} />
      </div>

    </div>
  </>
  )
}