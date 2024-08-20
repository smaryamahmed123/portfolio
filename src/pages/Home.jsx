import React from 'react';
import { Container, Box, Typography, Button, Grid, Avatar, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import avatarImage from '../assets/Img (2).pnj.jpeg';
import projectImage1 from '../assets/blood5.jpg';
import projectImage2 from '../assets/OIP.jpeg';

const Home = () => (
  <Container>
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Avatar
        alt="Syeda Maryam Ahmed"
        src={avatarImage}
        sx={{ width: 150, height: 150, mx: 'auto', mb: 2 }}
      />
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Hi, I'm Syeda Maryam Ahmed, a MERN Developer
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        I am passionate about creating dynamic and responsive web applications using the MERN stack. 
        Explore my projects to see what I have been working on!
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/projects" sx={{ my: 2 }}>
        View My Projects
      </Button>
    </Box>

    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Resume
      </Typography>
      <Button variant="contained" color="secondary" href="../assets/Syeda Maryam Ahmed CV.pdf" sx={{ my: 2 }}>
        Download My Resume
      </Button>
    </Box>

    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        - Web Development: Proficient in MERN stack (MongoDB, Express, React, Node.js) for building dynamic web applications.
        - Front-end Development: Experienced in using HTML, CSS, and JavaScript to create interactive user interfaces.
        - Back-end Development: Familiar with Node.js and Express for server-side programming and API development.
        - Database Management: Skilled in using MongoDB for database design and querying.
        - Version Control: Knowledgeable in using Git and GitHub for source code management.
        - Problem-Solving: Strong analytical and problem-solving skills to troubleshoot and resolve issues efficiently.
        - Communication: Excellent verbal and written communication skills for effective teamwork and collaboration.
      </Typography>
    </Box>

    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Recent Projects
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={projectImage1}
              alt="Blood Bank App"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Blood Bank App
              </Typography>
              <Typography variant="body2" color="black">
                A MERN app for managing blood donations and donors. Technologies used include MongoDB, Express, React, and Node.js.
              </Typography>
              <Button size="small" color="primary" href="https://mellifluous-madeleine-b83366.netlify.app">
                View Project
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={projectImage2}
              alt="E-commerce Website"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                E-commerce Website
              </Typography>
              <Typography variant="body2" color="black">
                An e-commerce website built using React. It includes features like product listing, cart management, and checkout.
              </Typography>
              <Button size="small" color="primary" href="https://react-hecathon-saturday.vercel.app/">
                View Project
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </Container>
);

export default Home;
