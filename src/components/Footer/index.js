import gitHubLogo from "../../assets/images/social/GitHub.png";
import linkedInLogo from "../../assets/images/social/LI-In-Bug.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import twitterLogo from "../../assets/images/social/Twittersocialicons-circle-white.png";
import { Grid } from '@mui/material'
import Avatar from '@mui/material/Avatar';

export default function Footer() {
  return (
    <Grid container spacing={2}
      sx={{ display: 'flex', backgroundColor: 'blue' }}>
      <Grid item xs={5} sx={{
          marginLeft: 1,
          paddingTop: 0
        }}>
        <p>Copyright © Jennifer Byrnes</p>
      </Grid>
      <Grid item xs={6} sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        maxHeight: 60,
        paddingTop: 0
      }}>
        <a xs={6} href="https://www.github.com/JenniferByrnes" >
          <Avatar alt="gitHub link" src={gitHubLogo} />
        </a>
        <a xs={6} href="https://www.github.com/JenniferByrnes" >
          <Avatar alt="LinkedIn link" src={linkedInLogo} />
        </a>
        <a href="https://www.github.com/JenniferByrnes" >
          <Avatar alt="Twitter link" src={twitterLogo} />
        </a>
      </Grid>
    </Grid>
  )
}