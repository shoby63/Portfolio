import { Avatar, Box, Stack } from '@mui/material'
import React from 'react'
import NavIcon from './NavIcon'
import logo from '../../public/IconSVGS/Logo.svg'
const Navbar = () => {
  return (
    <Box sx={{width:"100vw",height:"100px",position:"absolute", borderBottom:"5px solid rgba(10, 8, 18, 0.5)",boxShadow:"0 10 4 0 rgba(5, 4, 63, 0.8)"}}>
      <Stack alignItems={"center"} justifyContent={"space-between"} direction={"row"}>
        <Box sx={{height:"100%",width:"100px",marginTop:"25px",marginLeft:"50px"}}>
          <Avatar src={logo} sx={{height:"50px",width:"50px"}}/>sad
        </Box>
        <Stack alignItems={"center"} justifyContent={"space-between"} direction={"row"}> direction
          <NavIcon src={""} title={"Home"}/>
          <NavIcon src={""} title={"About"}/>
          <NavIcon src={""} title={"Projects"}/>
          <NavIcon src={""} title={"Resume"}/>
          <NavIcon src={""} title={"Blog"}/>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar