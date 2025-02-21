<template>
    <div class="reviews">
      <!-- Reviews Content -->
      <section class="reviews-content">
        <h1>Event Reviews</h1>
        <p>Read what others are saying about events you've attended.</p>
  
        <!-- Reviews List (static for now) -->
        <div class="review-list">
          <div class="review-item">
            <h3>Event Name #1</h3>
            <p class="review-text">"Great event! Very informative and engaging. Highly recommend!"</p>
            <p class="review-author">- John Doe</p>
          </div>
          <div class="review-item">
            <h3>Event Name #2</h3>
            <p class="review-text">"Amazing speakers and a lot of useful takeaways."</p>
            <p class="review-author">- Jane Smith</p>
          </div>
        </div>
  
        <!-- Add Review Button -->
        <button @click="goToAddReview">Add Your Review</button>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReviewsView',
    methods: {
      goToAddReview() {
        // Redirect to the page where users can add a review (adjust the route as necessary)
        this.$router.push('/add-review');
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
  
  /* Reviews Content Styles */
  .reviews-content {
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
  
  .review-list {
    margin-top: 2rem;
    text-align: left;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .review-item {
    background-color: #f9f9f9;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .review-item h3 {
    color: #333;
  }
  
  .review-text {
    font-style: italic;
    color: #666;
  }
  
  .review-author {
    text-align: right;
    font-weight: bold;
    color: #333;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  