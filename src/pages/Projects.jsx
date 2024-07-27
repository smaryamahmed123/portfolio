import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import blood from '../assets/blood5.jpg' 
import weather from '../assets/weather.jpeg'
import calculator from '../assets/Calculator.png'
import ecommerce from '../assets/OIP.jpeg' 
import quiz from '../assets/OIP (1).jpeg' 




const projects = [
    {
        title: 'Blood Bank App',
        description: 'A MERN app for managing blood donations and donors. Technologies used include MongoDB, Express, React, and Node.js. I developed the frontend using React and the backend using Node.js and Express, with MongoDB as the database.',
        imageUrl: 'src/assets/blood5.jpg',
        link: 'https://mellifluous-madeleine-b83366.netlify.app'
    },
    {
        title: 'Weather App',
        description: 'A React app that provides weather updates for any location. It uses the OpenWeatherMap API to fetch real-time weather data. I implemented the frontend using React and styled it with CSS.',
        imageUrl: 'src/assets/weather.jpeg',
        link: 'https://react-weather-app-tan-psi.vercel.app'
    },
    {
        title: 'Calculator',
        description: 'A simple calculator built with React. This project demonstrates my skills in building functional components and managing state in a React application.',
        imageUrl: 'src/assets/Calculator.png',
        link: 'https://stirring-khapse-7b049b.netlify.app'
    },
    {
        title: 'E-commerce Website',
        description: 'An e-commerce website built using React. It includes features like product listing, cart management, and checkout. The backend is powered by Node.js and Express, with MongoDB as the database.',
        imageUrl: 'src/assets/OIP.jpeg',
        link: 'https://react-hecathon-saturday.vercel.app/'
    },
    {
        title: 'Quiz App ',
        description: 'A quiz app built with React that allows users to take quizzes on various topics. It features multiple-choice questions, real-time scoring, and a leaderboard. The app is styled with CSS for a responsive design.',
        imageUrl: 'src/assets/OIP (1).jpeg',
        link: 'https://react-quiz-app-liard.vercel.app/'
    },
];

const Projects = () => (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="black">
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 2 }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
  

export default Projects;
