import gitHubLogo from "../../assets/images/social/GitHub.png";
import linkedInLogo from "../../assets/images/social/LI-In-Bug.png";
import twitterLogo from "../../assets/images/social/Twittersocialicons-circle-white.png";
import { Box, Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar';


export default function Footer() {
  return (
    <Grid container spacing={2}
      sx={{ display: 'flex', backgroundColor: 'blue' }}>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
        <p>Copyright © Jennifer Byrnes</p>
      </Grid>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-start', maxHeight: 60 }}>
        <a xs={6} href="https://www.github.com/JenniferByrnes" >
          <Avatar alt="gitHub link" src={gitHubLogo} style={{
            width: 50,
            height: 50,
          }} />
        </a>
        <a xs={6} href="https://www.github.com/JenniferByrnes" >
          <Avatar alt="LinkedIn link" src={linkedInLogo} style={{
            width: 50,
            height: 50,
          }} />
        </a>

        <a href="https://www.github.com/JenniferByrnes" >
          <Avatar alt="Twitter link" src={twitterLogo} style={{
            width: 50,
            height: 50,
          }} />
        </a>
      </Grid>
    </Grid>
  )
}