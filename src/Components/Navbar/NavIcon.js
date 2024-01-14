import { Avatar, Box, Icon, Stack, Typography } from '@mui/material'
import React from 'react'

const NavIcon = ({src,title}) => {
  return (
    <Stack direction={"row"} alignItems={"center"} sx={{
        height:"20px",
        paddingRight:4,
    }}>
    
    <Avatar src={src} />
    <Typography variant='subtitle1' color={"white"} sx={{marginLeft:1}}>{title}</Typography>
    </Stack>
  )
}

export default NavIcon