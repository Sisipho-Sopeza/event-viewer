<template>
  <div class="events">
    <!-- Events Content -->
    <section class="events-content">
      <h1>Upcoming Events</h1>
      <p>Discover exciting events happening near you.</p>

      <!-- Event List -->
      <div class="event-list">
        <div v-for="event in events" :key="event.id" class="event-item">
          <h3>{{ event.name }}</h3>
          <p class="event-date">{{ event.date }}</p>
          <p class="event-description">{{ event.description }}</p>
          <div class="event-details">
            <p><strong>Location:</strong> {{ event.location }}</p>
            <p><strong>Time:</strong> {{ event.time }}</p>
          </div>
          <div class="event-actions">
            <button @click="viewEventDetails(event.id)" class="view-button">View Details</button>
            <button @click="attendEvent(event.id)" class="attend-button">Attend</button>
          </div>
        </div>
      </div>

      <!-- Add Event Button -->
      <button @click="goToAddEvent" class="add-button">Add New Event</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EventsView',
  data() {
    return {
      events: [
        {
          id: 1,
          name: "Tech Conference 2025",
          date: "March 15, 2025",
          time: "10:00 AM - 6:00 PM",
          location: "Downtown Convention Center",
          description: "Join us for a day of tech talks, networking, and hands-on workshops."
        },
        {
          id: 2,
          name: "Community Hackathon",
          date: "April 5-6, 2025",
          time: "9:00 AM - 9:00 PM",
          location: "Innovation Hub",
          description: "48-hour coding challenge to build solutions for local community problems."
        },
        {
          id: 3,
          name: "AI & Machine Learning Meetup",
          date: "March 22, 2025",
          time: "6:30 PM - 9:00 PM",
          location: "Tech Incubator Space",
          description: "Monthly gathering of AI enthusiasts discussing the latest in machine learning."
        }
      ]
    };
  },
  methods: {
    goToAddEvent() {
      this.$router.push('/add-event');
    },
    viewEventDetails(eventId) {
      this.$router.push(`/event-details/${eventId}`);
    },
    attendEvent(eventId) {
      // In a real app, this would handle event registration
      alert(`You've registered for event #${eventId}! Check your email for confirmation.`);
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
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.event-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.event-item h3 {
  color: #333;
  margin-top: 0;
  font-size: 1.5rem;
}

.event-date {
  color: #e67e22;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.event-description {
  color: #666;
  margin-bottom: 1rem;
}

.event-details {
  margin-bottom: 1rem;
}

.event-details p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.event-actions {
  display: flex;
  gap: 10px;
  margin-top: 1rem;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.view-button {
  background-color: #3498db;
  color: white;
}

.view-button:hover {
  background-color: #2980b9;
}

.attend-button {
  background-color: #28a745;
  color: white;
}

.attend-button:hover {
  background-color: #218838;
}

.add-button {
  background-color: #9b59b6;
  color: white;
  margin-top: 2rem;
}

.add-button:hover {
  background-color: #8e44ad;
}
</style>