import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Typography } from '@mui/material';






export default function HomeAppBar() {
  
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
             <Toolbar >
                <IconButton
                 
                >
                    <MenuIcon />
                
                </IconButton>

                <Typography >
                        AppOne
                    </Typography>

            </Toolbar>

        </AppBar>
        </Box>
        </>
  );
}
