import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid, Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, ScopedCssBaseline, Typography } from '@mui/material'
import Box  from '@mui/system/Box'
import React from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore';

import SidebarListItem from "./sidebarListItem"


export default function SidebarListItems({title,Icon,items}) {
  return (
    
    <Box>
  

    <Accordion disableGutters  >
 <AccordionSummary expandIcon={<ExpandMore/>} disableGutters>
  
  <Box sx={{ display:'flex',alignItems:'center' }} >
  <IconButton size="small"> {Icon} </IconButton>   
  <Typography   >
      {title}
  </Typography>
  </Box>

 </AccordionSummary>
 <AccordionDetails disableGutters>
   {
     items.map(( (item,index) =>(

       <SidebarListItem item={item.item} Icon = { item.Icon } key={ index } />
     )))

   }

 </AccordionDetails>

   </Accordion>
</Box>
  )
}
