import React from 'react'
import Personal from './LeftSide/Personal'
import Content from './RightSide/Content'
const Vcard = () => {
  return (
    <>
    <div className='h-full w-full p-2 flex'>
      <Personal />
    </div>
    <div className='w-full h-full flex justify-end'>
      <Content />
    </div>
    </>
    
  )
}

export default Vcard