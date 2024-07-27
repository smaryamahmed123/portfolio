import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
// import { getToken } from '../auth.js'; // Import the function
// import * as jwt_decode from 'jwt-decode'; // Import all from the module


const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [visitors, setVisitors] = useState([]);

 
  useEffect(() => {
    if (!isAdmin) return; // Prevent fetching visitors if not an admin

    const fetchVisitors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/visitors', {
          headers: {
            // Authorization: getToken(),
          },
        });
        if (Array.isArray(response.data)) {
          setVisitors(response.data);
        } else {
          setVisitors([]); // Handle case where response is not an array
        }
      } catch (error) {
        console.error('Error fetching visitors:', error);
        setVisitors([]); // Set empty array in case of error
      }
    };

    fetchVisitors();
  }, [isAdmin]);

  if (!isAdmin) {
    return <p>Access Denied</p>;
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Visitor Logs
        </Typography>
        <List>
          {visitors.map((visitor, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${visitor.ip} - ${visitor.location}`} secondary={new Date(visitor.visitedAt).toLocaleString()} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Admin;
