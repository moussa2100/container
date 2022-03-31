import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Slide from '@mui/material/Slide';








export default function HomeAppBar({handleOpen}) {
  
    
    return(
        <AppBar position='static' sx={{height:'50px' }} > 
        <Toolbar
        sx={{width: '100%',height:'50px', display: 'flex',justifyContent: 'center',alignItems:'center', backgroundColor:'#f6f6f6' }}
        >

            

        
        <Box  sx={{ flexGrow:1 }}>
            <IconButton onClick={handleOpen} >
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
  );
}
