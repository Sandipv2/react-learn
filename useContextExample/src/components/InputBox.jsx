import React from 'react'

function InputBox({value, onValueChange}) {
  return (
    <div>
        <input type="text" value={value} onChange={(e) => onValueChange(e.target.value)}/>
    </div>
  )
}

export default InputBox