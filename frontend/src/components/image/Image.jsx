import React from 'react'

const Image = ({src,...rest}) => {

  // const location = useLocation
  console.log(window.location,'src')
    //this code to display the game in dev env or prodc env
    src = src && window.location === 'https://retrogames-e0ob.onrender.com'
    ? `https://retrogames-e0ob.onrender.com/${src}`
    : `http://localhost:3000/${src}`
  return (
    <img {...rest} src={src} alt={'games'}/>
  )
}

export default Image