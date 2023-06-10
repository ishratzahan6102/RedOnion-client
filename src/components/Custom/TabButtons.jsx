import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material'

const CustomTabs = styled(Tabs)(({ theme }) => ({
  padding: '5px',
  '& .MuiTabs-flexContainer': {
    justifyContent: 'space-between'
  },

  '& .MuiTab-root': {
    textTransform: 'capitalize',
    color: '#000',

    '&:hover': {
      color: theme.palette.primary.main
    }
  },

}))



export default function TabButtons() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  );
}