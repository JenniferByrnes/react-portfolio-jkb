
import PhotoCard from "../components/PhotoCard";
import IntroCard from "../components/IntroCard";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <h1>ABOUT ME</h1>
        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            m: 1,
            p: 1,
          }}
        >
          <Box
            sx={{
              m: 1,
              p: 1,
            }}>
            <PhotoCard></PhotoCard>
          </Box>
          <Box
            sx={{
              m: 1,
              p: 1,
            }}>
            <IntroCard></IntroCard>
          </Box>
        </Box>
      </Container>
    </>
  )
}