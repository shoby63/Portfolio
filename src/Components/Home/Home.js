import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar/Navbar'
import Section from './Section'
import bg from '../../public/Utils/home-bg.jpg'

const Home = () => {
  return (
   <Box height={"100vh"} sx={{width:"100vw",position:"relative",
   background:`url(${bg}) no-repeat rgba(12, 6, 8, 0.7)`,
    backgroundPosition: "50% 5%",
    backgroundBlendMode: "multiply",}}>
     <Navbar />
     <Section />
    </Box>
  )
}

export default Home