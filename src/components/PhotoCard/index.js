import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import byrnesImage from "../../assets/images/JByrnesPhoto.jpeg";

export default function PhotoCard() {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        height="350"
        image={byrnesImage}

        alt="Jennifer Byrnes"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Web Developer
        </Typography>
        <Stack direction="row" spacing={2}>
          <Avatar alt="MongoDB" src="../../assets/images/avatar/mongodb.png" />
          <Avatar alt="Express.js" src="../../assets/images/avatar/express.png" />
          <Avatar alt="React" src="../../assets/images/avatar/mongodb.png" />
          <Avatar alt="Node.js" src="../../assets/images/avatar/node.png" />
        </Stack>
      </CardContent>
    </Card>
  );
}
