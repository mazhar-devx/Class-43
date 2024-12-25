import React from 'react'

function NewData(props) {
let Icons = props.icon
  return (
    <div>
     <div className={`${props.className} absolute `}>
      {
        <Icons className="text-white text-2xl"/>
      }
     </div>
    </div>
  )
}

export default NewData
