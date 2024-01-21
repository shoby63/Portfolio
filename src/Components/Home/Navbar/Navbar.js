import { Avatar, Box, Stack } from '@mui/material'
import React from 'react'
import NavIcon from './NavIcon'
// import logo from '../../public/IconSVGS/Black White and Green Modern Technology Animated Logo.gif'
import {about,home, blog,project,resume} from '../../../public/index'
const Navbar = () => {
  
  return (
    <Box sx={{width:"100vw",height:"50px", borderBottom:"5px solid rgba(10, 8, 18, 0.5)",boxShadow:"0 10 4 0 rgba(5, 4, 63, 0.8)",paddingTop:3}}>
      <Stack alignItems={"center"} justifyContent={"space-between"} direction={"row"}>
        <Box sx={{height:"100%",width:"100px",marginTop:"20px",marginLeft:"25px", backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay",}} >
          {/* <img src={logo} style={{ height:"inherit", width:"100%" , backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay",
    borderRadius:"50%"}}/> */}
        </Box>
        <Stack  justifyContent={"space-between"} direction={"row"}> 
          <NavIcon src={home} title={"Home"}/>
          <NavIcon src={about} title={"About"}/>
          <NavIcon src={project} title={"Projects"}/>
          <NavIcon src={resume} title={"Resume"}/>
          <NavIcon src={blog} title={"Blog"}/>        
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar