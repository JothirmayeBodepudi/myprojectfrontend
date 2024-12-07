import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bcrypt from 'bcryptjs'; // Import bcryptjs for hashing

// Copyright component
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// Material-UI default theme
const theme = createTheme();

// Validation Logic for Email
const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Only allows @gmail.com
  return emailRegex.test(email);
};

// Validation Logic for Password
const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  return passwordRegex.test(password);
};

// Signup Form component
export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    role: 1,
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(''); // Clear previous messages

    // Validate email
    if (!isValidEmail(formData.email)) {
      setMessage('Invalid email. Must end with @gmail.com');
      return;
    }

    // Validate password
    if (!isValidPassword(formData.password)) {
      setMessage(
        'Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be between 8-16 characters.'
      );
      return;
    }

    try {
      // Hash the password before sending it
      const saltRounds = 10; // Number of rounds for salting
      const hashedPassword = bcrypt.hashSync(formData.password, saltRounds);

      const response = await axios.post('http://localhost:8081/api/user', {
        name: formData.name,
        role: formData.role,
        email: formData.email,
        password: hashedPassword, // Send hashed password instead of plain text
      }, {
        headers: { 'Content-Type': 'application/json' },
      });

      setMessage(response.data); // Display success message
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data);
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  autoFocus
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  name="role"
                  id="role"
                  fullWidth
                  value={formData.role}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>User</MenuItem>
                  <MenuItem value={2}>Admin</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          {message && (
            <Typography
              variant="body1"
              color={message.includes('successful') ? 'green' : 'red'}
              align="center"
              sx={{ mt: 2 }}
            >
              {message}
            </Typography>
          )}
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}