
 import React from 'react';
 import { Button, Paper } from '@mantine/core';
 import { MantineProvider, Text } from '@mantine/core';
import Profile from './pages/profile/Profile';
 

function App() {
   
  return (
    <div className='App'>
      <Profile/>
     {/* <MantineProvider theme={{ fontFamily: 'Open Sans' }} withGlobalStyles withNormalizeCSS>
    <Paper>
      <Text>This is a simple text</Text>
      <Text>Welcome to Mantine!</Text>
    </Paper>
      
     <Button>Click Me</Button>
    </MantineProvider>
    */}
    </div>
 )
}
 

export default App
