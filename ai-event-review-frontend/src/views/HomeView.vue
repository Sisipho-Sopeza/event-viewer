<template>
  <div class="home">
    <!-- Main Content -->
    <section class="main-content">
      <h1>Welcome to the Event Review Platform</h1>
      <p>Your one-stop destination to explore, review, and manage events effortlessly.</p>
      <button @click="goToEventPage">Explore Events</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToEventPage() {
      // Redirect to event page (you can change this to the correct route if needed)
      this.$router.push('/events');
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

/* Main Content Styles */
.main-content {
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

button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
