import {memo} from 'react'

const Counter = ({children}) => {
    console.log(children)
  const navStyle = {
    backgroundColor: "black",
    textAlign: "center",
    padding: "10px"
  }

  return (
    <>
        <div style={navStyle}>
          <h1>This is Navbar </h1>
        </div>

        {children}
    </>
  )
}

export default memo(Counter)