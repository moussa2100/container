import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

export default function SidebarTitle({title}) {
  return (
    <Box padding={1} >


    <Typography color='#00000099' variant="">
        {title}
    </Typography>
     </Box>
  )
}
