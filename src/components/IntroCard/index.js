import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      simple icons
    </Typography>
    <Divider />
    <Typography variant="h5" component="div">
      Hi!
    </Typography>
    <br />
    <Typography variant="body2">
      Full Stack Web Developer with a focus on front-end development and experience in application development, teaching, and military leadership. Certificate from the University of Richmond's Full Stack Web Development Bootcamp in November 2022.
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