import React from 'react'
import { ListItemButton,IconButton,Typography } from '@mui/material'

export default function SidebarListItem({ Icon,item }) {
  return (

    <ListItemButton >
    <IconButton sx={{height:'20px',width:'20px',mr: 1 }}> {Icon} </IconButton> 
    <Typography fontSize={14}  >
     {item}
 </Typography>
    </ListItemButton>
    
  )
}
