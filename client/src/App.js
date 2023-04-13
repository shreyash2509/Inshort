import logo from './logo.svg';
import './App.css';

import {Box} from '@mui/material';

//components
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';
import styled from '@emotion/styled';
const Container=styled(Box)`
width:60%;
margin:40px auto 0 auto;
`


function App() {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
        <Articles />
      </Container>
    </Box>
  );
}

export default App;
