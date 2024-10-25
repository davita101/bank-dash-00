import React from 'react'

interface MyICons {
    src: React.FC, // function 
    className: String
}


const IconRender: React.FC<MyICons> = ({src, className}) => {
const Img = src
  return (
    <div className={`${className}`}>
      <Img  />
    </div>
  )
}

export default IconRender