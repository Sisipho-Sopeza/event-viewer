<template>
    <div class="events">
      <!-- Events Content -->
      <section class="events-content">
        <h1>Upcoming Events</h1>
        <p>Discover the latest events you can attend, review, and enjoy!</p>
  
        <!-- Events List (static for now) -->
        <div class="event-list">
          <div class="event-item">
            <h3>Event Name #1</h3>
            <p class="event-date">Date: March 5, 2025</p>
            <p class="event-location">Location: New York City</p>
            <button @click="goToEventDetails(1)">View Details</button>
          </div>
          <div class="event-item">
            <h3>Event Name #2</h3>
            <p class="event-date">Date: March 20, 2025</p>
            <p class="event-location">Location: Los Angeles</p>
            <button @click="goToEventDetails(2)">View Details</button>
          </div>
        </div>
  
        <!-- Add Event Button -->
        <button @click="goToAddEvent">Add New Event</button>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EventsView',
    methods: {
      goToEventDetails(eventId) {
        // Navigate to event details page
        this.$router.push(`/event-details/${eventId}`);
      },
      goToAddEvent() {
        // Redirect to the page where users can add a new event (adjust route if necessary)
        this.$router.push('/add-event');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Global Styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  /* Navbar Styles */
  .navbar {
    background-color: #333;
    color: white;
    padding: 1rem 2rem;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar ul {
    display: flex;
    gap: 1.5rem;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  
  /* Events Content Styles */
  .events-content {
    text-align: center;
    margin-top: 50px;
    padding: 2rem;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  p {
    font-size: 1.2rem;
    color: #555;
  }
  
  .event-list {
    margin-top: 2rem;
    text-align: left;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .event-item {
    background-color: #f9f9f9;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .event-item h3 {
    color: #333;
  }
  
  .event-date, .event-location {
    color: #666;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  