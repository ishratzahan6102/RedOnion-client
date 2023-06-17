import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material'

const CustomTabs = styled(Tabs)(({ theme }) => ({
  padding: '5px',
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" ,
  
  '& .MuiTabs-flexContainer': {
    justifyContent: 'space-between'
  },

  '& .MuiTab-root': {
    textTransform: 'capitalize',
    color: '#000',

    '&:hover': {
      // color: theme.palette.primary.main
    }
  },

  '& .Mui-selected' : {
    background: theme.palette.primary.main ,
    color: '#ffffff !important' ,
    borderRadius: '15px'
  },

  '& .MuiTabs-indicator' : {
    display: 'none'
  }

}))



export default function TabButtons({value, setValue}) {
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <CustomTabs value={value} onChange={handleChange} centered>
        <Tab label="Breakfast" />
        <Tab label="Lunch" />
        <Tab label="Dinner" />
      </CustomTabs>
    </Box>
  );
}