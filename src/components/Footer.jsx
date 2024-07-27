import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 2,
        mt: 4,
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Connect with me
        </Typography>
        <Box>
          <IconButton
            href="https://www.linkedin.com/in/syeda-maryam-ahmed-766a22281/"
            target="_blank"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://github.com/smaryamahmed123"
            target="_blank"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="mailto:smaryamahmed2006@gmail.com"
            target="_blank"
            color="inherit"
          >
            <EmailIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          &copy; {new Date().getFullYear()} Syeda Maryam Ahmed. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
