import React from 'react'
import {   IconButton,  ListItemButton,  Typography } from '@mui/material'
import Box  from '@mui/system/Box'
import BoyIcon from '@mui/icons-material/Boy';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SidebarListItems from './sidebarListItems'
import SidebarTitle from './sidebarTitle'


export default function SidebarList() {
    const listItems =
    [
    { 
    
    section:'List Section',
    buttons: [
        { 
            title: 'Patientts',
            Icon: <BoyIcon />,
            items:[
                {
                    item:'Add Patientttt',
                    Icon: <AddIcon />,
                    path: '',
                },
                {
                    item:"Patient List",
                    Icon: <ListIcon />,
                    path: '',
                }
            ]
    
        },
        { 
            title: 'Departments',
            Icon: <ListIcon />,
            items:[
                {
                    item:'Add Department',
                    Icon: <AddIcon />,
                    path: '',
                },
                {
                    item:"Department List",
                    Icon: <ListIcon />,
                    path: '',
                }
            ]
    
        },
   
    ]
}
    ]
  return (
    <Box>
    <Box sx={{ paddingX:2,paddingY:1 }}>

      <ListItemButton>
            <IconButton sx={{height:'20px',width:'20px',mr: 1 }}> <DashboardIcon/> </IconButton> 
                 <Typography fontSize={14}  >
               Dashboard
             </Typography>
            </ListItemButton>

      
    </Box>
    
        {listItems.map((item) =>{ 
           
            console.log(item)
           return( 
            [
            <SidebarTitle title={item.section} key={item.section} /> ,    
            item.buttons.map(button => (
                <SidebarListItems title={button.title } Icon={ button.Icon } items={button.items} section={'section'} key={button.title} />))

            ]
           )
           }
        ) }
       
    </Box>
  )
}
