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
          logo
          {/* <img src={require("./logo-company.png")} style={{height: "10vh"}} /> */}
        </Toolbar>
      </Container>
  )
}

export default Header
