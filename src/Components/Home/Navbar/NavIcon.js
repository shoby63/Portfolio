import { Avatar, Box, Icon, Stack, Typography } from '@mui/material'
import React from 'react'

const NavIcon = ({src,title}) => {
  return (
    <Stack direction={"row"} alignItems={"center"} sx={{
        height:"20px",
        paddingRight:4,
    }}>    
     <img src={src} alt={title} style={{zIndex:100000}}/>
    <Typography variant='h6' color={"white"} sx={{marginLeft:1}}>{title}</Typography>
    </Stack>
  )
}

export default NavIcon