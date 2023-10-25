import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material';


const Container = styled(AppBar)`
background: #060606;
height:10vh;
width:100%;
`
// background: #060606;

const Header = () => {
  return (
      <Container position='static'>
        <Toolbar>
          {/* logo */}
          <img src={require("./codeEditor-logo.png")} alt="Indra's code editor" style={{height: "8vh" , margin:"5px 0px 5px 0px" , borderRadius: "10px"}} />
          {/* Welcome To Indra's Code Editor */}
        </Toolbar>
      </Container>
  )
}

export default Header
