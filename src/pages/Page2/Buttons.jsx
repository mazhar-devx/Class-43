import React from 'react'
function Buttons(value) {
  return (
    <div>
      <div className={`h-10 text-sm w-32 transition-all flex items-center justify-center rounded-full cursor-pointer ${value.className}`}>
        {value.text}
      </div>
    </div>
  )
}
export default Buttons;