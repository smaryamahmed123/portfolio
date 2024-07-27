import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => (
    <Container maxWidth="md" sx={{ marginTop: '50px', marginBottom: '50px' }}>
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        Hello! I'm Syeda Maryam Ahmed, a passionate MERN stack developer based in Karachi, Sindh. As a fresher in the field, I bring strong foundational skills and a zeal for learning and growing in the tech industry.
      </Typography>
      <Typography variant="body1" paragraph>
        I have developed several projects, including a Weather App, a Quiz App, and an E-commerce demo app. These projects have honed my expertise in building dynamic and responsive web applications using the MERN stack (MongoDB, Express, React, Node.js).
      </Typography>
      <Typography variant="body1" paragraph>
        I completed short courses in MERN Stack Development at Jawan Pakistan in 2024, which provided me with comprehensive training in full-stack development. My skills encompass both front-end and back-end development, along with database management and version control.
      </Typography>
      <Typography variant="body1" paragraph>
        I am proficient in HTML, CSS, and JavaScript for creating interactive user interfaces, and I am experienced in using Node.js and Express for server-side programming and API development. My knowledge of MongoDB allows me to efficiently design and query databases.
      </Typography>
      <Typography variant="body1" paragraph>
        With strong problem-solving abilities and excellent communication skills, I am well-equipped to collaborate effectively within teams and tackle challenges head-on. I am eager to contribute to innovative projects and grow my career in a dynamic organization.
      </Typography>
      <Typography variant="body1" paragraph>
        Feel free to check out my work and connect with me on <a href="https://www.linkedin.com">LinkedIn</a> and <a href="https://github.com">GitHub</a>.
      </Typography>
    </Box>
  </Container>
);

export default About;
