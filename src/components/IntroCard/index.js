import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const card = (
  <CardContent>
  <Stack direction="row" spacing={1} margin={1} >
      <Avatar sx={{ bgcolor: 'blue', width: 26, height: 26  }}>J</Avatar>
      <Avatar sx={{ bgcolor: 'red', width: 26, height: 26  }}>K</Avatar>
      <Avatar sx={{ bgcolor: 'green', width: 26, height: 26  }}>B</Avatar>
    </Stack>
    <Divider />
    <Typography variant="h5" component="div">
      Hi!
    </Typography>
    <br />
    <Typography variant="body2">
      I'm a Full Stack Web Developer who enjoys putting solving puzzles all the way through (front and back end), and I have experience in application development, teaching, and military leadership. I earned my Certificate from the University of Richmond's Full Stack Web Development Bootcamp in November 2022.  My computer science degree is from Emory University.
    </Typography>
  </CardContent>
);

export default function IntroCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}