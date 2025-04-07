import { Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
// import Image from 'next/image'
import React from 'react'

const TopNav = () => {
  return (
    <Box sx={{ width: '100%', height: 'fit-content', backgroundColor: 'red'}}>
        <Box>
            {/* TODO: Put Mill Steel Logo */}
            {/* <Image alt="Company Logo" height={40} width={40}/> */}
            <Box sx={{ width: '40px', height: '40px', color: 'white'}} />
        </Box>
        <Box>
            <IconButton aria-label='open-top-nav-menu'>
                <MenuIcon />
            </IconButton>
        </Box>
    </Box>
  )
}

export default TopNav