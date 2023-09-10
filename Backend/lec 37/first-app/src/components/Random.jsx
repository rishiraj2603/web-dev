import React from 'react'

const Random = () => {
    const emojis = ['😀','😄','🤣','😃'];
    const emojiList = emojis.map((item,index) =>{
        return <li>{item}</li>
    }
    )
    
  return (
    {emojiList}
  )
}

export default Random