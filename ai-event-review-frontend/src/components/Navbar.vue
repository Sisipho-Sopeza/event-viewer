<template>
    <nav class="navbar">
      <div class="logo">Event Review</div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
        <li><router-link to="/reviews">Reviews</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/calendar">Calendar</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "AppNavbar",
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #db47aa;
    padding: 10px 20px;
    color: white;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
  }
  
  .nav-links li {
    margin: 0 15px;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .nav-links a:hover {
    color: #0ccfe9;
  }
  </style>
  