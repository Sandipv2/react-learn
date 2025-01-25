import {memo} from 'react'
import {useCount} from '../contexts/countContext.js'

const Counter = () => {
  const {count, setCount} = useCount()
    
  const navStyle = {
    backgroundColor: "black",
    textAlign: "center",
    padding: "10px"
  }

  return (
    <>
        <div style={navStyle}>
          <h1>This is Navbar {count}</h1>
          <button onClick={() => setCount(count+1)}>Click</button>
        </div>
    </>
  )
}

export default memo(Counter)