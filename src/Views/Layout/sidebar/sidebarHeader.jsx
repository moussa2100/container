import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Typography  from '@mui/material/Typography';

export default function SidebarHeader({title}) {
  return (
    <div style={{width: '100%',height:'64px', display: 'flex',justifyContent: 'center',alignItems:'center', backgroundColor:'#323232'}}>
    <AcUnitIcon sx={{color:'white',mr: 1 }} />
    <Typography   variant='h6' sx={{color:'white'}}>
        {title}
    </Typography>
    
    </div>
  )
}
