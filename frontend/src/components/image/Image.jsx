import React from 'react'

const Image = ({src,...rest}) => {
  console.log(src,'src')
    //this code to display the game in dev env or prodc env
    src = src && src.includes('https://')
    ? `https://retrogames-e0ob.onrender.com/${src}`
    : `http://localhost:3000/${src}`
  return (
    <img {...rest} src={src} alt={'games'}/>
  )
}

export default Image