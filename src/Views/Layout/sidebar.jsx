import { Accordion, AccordionDetails, AccordionSummary, AppBar, Avatar, Badge, Button, Divider, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, ScopedCssBaseline, Toolbar, Typography } from '@mui/material'
import { bgcolor, Box } from '@mui/system'
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AppsIcon from '@mui/icons-material/Apps';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BoyIcon from '@mui/icons-material/Boy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import { ExpandMore } from '@mui/icons-material';



export default function Sidebar() {
  return (
<>

    <ScopedCssBaseline>
       

    <Grid container  >
        


   <Grid item xs={2}  sx={{display:'flex',flexDirection:'column' ,height: '100vh',borderRight:1 ,borderColor:'#d4d5d5',width:'100px'}}>
   
            <div style={{width: '100%',height:'64px', display: 'flex',justifyContent: 'center',alignItems:'center', backgroundColor:'#323232'}}>
            <AcUnitIcon sx={{color:'white',mr: 1 }} />
            <Typography   variant='h6' sx={{color:'white'}}>
                APPONE
            </Typography>
            
            </div>


            <Box component='div'  >
            <List >
            <ListSubheader>
                    List
                </ListSubheader>
            <ListItemButton  >
         
                <ListItemIcon >
                <AppsIcon />
                </ListItemIcon>
                <ListItemText>
                    Department
                </ListItemText>
            </ListItemButton>
                <Divider variant='middle' />
            <ListItemButton>
         
         <ListItemIcon>
         <AccountBoxIcon />
         </ListItemIcon>
         <ListItemText>
             Doctor
         </ListItemText>
     </ListItemButton>
     <Divider variant='middle' />

     <ListItemButton>
         
         <ListItemIcon>
         <BoyIcon />
         </ListItemIcon>
         <ListItemText>
             Patient
         </ListItemText>
     </ListItemButton>
     <Divider variant='middle' />
     <ListItemButton>
         
         <ListItemIcon>
         <CalendarMonthIcon />
         </ListItemIcon>
         <ListItemText>
             Schedule
         </ListItemText>
     </ListItemButton>
     <Divider variant='middle' />
            </List>
            </Box>
     
        
            <Box component='div' >
            <List>
                <ListSubheader>
                    Settings
                </ListSubheader>
                <ListItemButton>
                <ListItemIcon>
                <SettingsApplicationsIcon />
                </ListItemIcon>
                <ListItemText>
                    Settings
                </ListItemText>
            </ListItemButton>
            <Divider variant='middle' />
            <ListItemButton>
                <ListItemIcon>
                <DisplaySettingsIcon />
                </ListItemIcon>
                <ListItemText>
                    Prefernces
                </ListItemText>
            </ListItemButton>
    
            <Divider variant='middle' />
            

            </List>


            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>} >
                 
                 <Box sx={{ display:'flex',alignItems:'center' }}>
                 <IconButton> <BoyIcon/> </IconButton>   
                 <Typography>
                     Patient
                 </Typography>
                 </Box>

                </AccordionSummary>
                <AccordionDetails>
                
                </AccordionDetails>

            </Accordion>
            </Box>
    

    </Grid>

    <Grid item xs={10} sx={{  }}>

        <AppBar position='static' sx={{height:'50px' }} > 
            <Toolbar
            sx={{width: '100%',height:'50px', display: 'flex',justifyContent: 'center',alignItems:'center', backgroundColor:'#f6f6f6' }}
            >


                <Box  sx={{ flexGrow:1 }}>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                </Box>
                <IconButton>
                <LanguageIcon />
                </IconButton>
                <IconButton>
                <Badge badgeContent={5} >
                <NotificationsIcon />
                </Badge>
                </IconButton>

                <IconButton>
                <Avatar src='https://static.planetminecraft.com/files/resource_media/screenshot/1140/steve-jobs1_601898_601991.jpg' />
                </IconButton>
                
            </Toolbar>

        </AppBar>
 
    </Grid>

    </Grid>

    </ScopedCssBaseline>
    </>
  )
}
