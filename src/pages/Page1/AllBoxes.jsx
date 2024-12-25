import React from 'react'

function NewData(props) {
let Icons = props.icon
  return (
    <div>
     <div className={`${props.className} absolute `}>
      {
        <Icons className="text-white text-3xl"/>
      }
     </div>
    </div>
  )
}

export default NewData
