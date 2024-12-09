import React from "react"

const Header = ({title}) => {
    const headerStyle = {backgroundColor:'mediumblue',color:'white'}
  return (
    <header style={headerStyle}>
        <h3>{title}</h3>
    </header>
  )
}
Header.defaultProps ={
  title:"To do list"
}

export default Header