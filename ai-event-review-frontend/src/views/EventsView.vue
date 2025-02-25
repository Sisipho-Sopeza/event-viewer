<template>
  <div class="events">
    <section class="events-content">
      <h1>Upcoming Events</h1>
      <p>Discover the latest events you can attend, review, and enjoy!</p>

      <!-- Search and Filter Bar -->
      <div class="search-filter">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search events..."
          @input="filterEvents"
        >
        <select v-model="selectedLocation" @change="filterEvents">
          <option value="">All Locations</option>
          <option v-for="location in uniqueLocations" :key="location" :value="location">
            {{ location }}
          </option>
        </select>
      </div>

      <!-- Events List -->
      <div class="event-list">
        <div v-for="event in filteredEvents" 
             :key="event.id" 
             class="event-item"
             :class="{ 'featured': event.featured }">
          <div class="event-header">
            <h3>{{ event.name }}</h3>
            <span v-if="event.featured" class="featured-badge">Featured</span>
          </div>
          <p class="event-date">Date: {{ formatDate(event.date) }}</p>
          <p class="event-location">Location: {{ event.location }}</p>
          <p class="event-description">{{ event.description }}</p>
          <div class="event-actions">
            <button @click="goToEventDetails(event.id)" class="btn-primary">
              View Details
            </button>
            <button @click="toggleFavorite(event.id)" 
                    class="btn-favorite"
                    :class="{ 'favorited': event.isFavorite }">
              ❤
            </button>
          </div>
        </div>
      </div>

      <!-- Add Event Button -->
      <button @click="goToAddEvent" class="btn-add">Add New Event</button>

      <!-- No Results Message -->
      <p v-if="filteredEvents.length === 0" class="no-results">
        No events found matching your criteria
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EventsView',
  data() {
    return {
      searchQuery: '',
      selectedLocation: '',
      events: [
        {
          id: 1,
          name: 'Tech Conference 2025',
          date: new Date('2025-03-05'),
          location: 'New York City',
          description: 'Join us for the biggest tech conference of the year!',
          featured: true,
          isFavorite: false
        },
        {
          id: 2,
          name: 'Music Festival',
          date: new Date('2025-03-20'),
          location: 'Los Angeles',
          description: 'A three-day music extravaganza featuring top artists.',
          featured: false,
          isFavorite: false
        },
        {
          id: 3,
          name: 'Art Exhibition',
          date: new Date('2025-04-15'),
          location: 'Chicago',
          description: 'Showcasing contemporary art from around the world.',
          featured: false,
          isFavorite: false
        }
      ]
    }
  },
  computed: {
    filteredEvents() {
      return this.events.filter(event => {
        const matchesSearch = event.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            event.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesLocation = !this.selectedLocation || event.location === this.selectedLocation
        return matchesSearch && matchesLocation
      })
    },
    uniqueLocations() {
      return [...new Set(this.events.map(event => event.location))]
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    goToEventDetails(eventId) {
      this.$router.push(`/event-details/${eventId}`)
    },
    goToAddEvent() {
      this.$router.push('/add-event')
    },
    toggleFavorite(eventId) {
      const event = this.events.find(e => e.id === eventId)
      if (event) {
        event.isFavorite = !event.isFavorite
        // Save updated favorites to localStorage
        this.saveEventsToStorage()
      }
    },
    filterEvents() {
      // Method stub for potential future server-side filtering
    },
    // Load events from localStorage on component creation
    loadEventsFromStorage() {
      const storedEvents = localStorage.getItem('events')
      if (storedEvents) {
        const parsedEvents = JSON.parse(storedEvents)
        
        // Convert string dates back to Date objects
        parsedEvents.forEach(event => {
          event.date = new Date(event.date)
        })
        
        // Merge with default events, avoiding duplicates by ID
        const existingIds = this.events.map(e => e.id)
        const newEvents = parsedEvents.filter(e => !existingIds.includes(e.id))
        
        this.events = [...this.events, ...newEvents]
      }
    },
    // Save events to localStorage
    saveEventsToStorage() {
      localStorage.setItem('events', JSON.stringify(this.events))
    }
  },
  created() {
    // Load any stored events when component is created
    this.loadEventsFromStorage()
    
    // Listen for event bus events (if you're using that approach)
    // this.$root.$on('add-event', this.addEvent)
  },
  beforeDestroy() {
    // Clean up event listeners if using event bus
    // this.$root.$off('add-event')
  }
}
</script>

<style scoped>
/* CSS remains the same as in your original component */
.events {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.events-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
}

.search-filter {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
}

.search-filter input,
.search-filter select {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  min-width: 200px;
}

.event-list {
  display: grid;
  gap: 1.5rem;
  margin: 2rem 0;
}

.event-item {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.event-item:hover {
  transform: translateY(-2px);
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.featured {
  border: 2px solid #4299e1;
}

.featured-badge {
  background: #4299e1;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}

.event-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn-primary {
  background-color: #4299e1;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #3182ce;
}

.btn-favorite {
  padding: 0.75rem;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-favorite.favorited {
  background: #fc8181;
  color: white;
  border-color: #fc8181;
}

.btn-add {
  background-color: #48bb78;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  margin: 2rem auto;
  display: block;
}

.btn-add:hover {
  background-color: #38a169;
}

.no-results {
  text-align: center;
  color: #718096;
  margin-top: 2rem;
}

.event-description {
  color: #4a5568;
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .search-filter {
    flex-direction: column;
  }
  
  .event-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .featured-badge {
    margin-top: 0.5rem;
  }
}
</style>
