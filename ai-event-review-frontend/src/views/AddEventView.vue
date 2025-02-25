<template>
    <div class="add-event">
      <section class="add-event-content">
        <h1>Add New Event</h1>
        <p>Create a new event to share with the community</p>
  
        <form @submit.prevent="submitForm" class="event-form">
          <div class="form-group">
            <label for="eventName">Event Name*</label>
            <input 
              id="eventName"
              type="text" 
              v-model="newEvent.name" 
              placeholder="Enter event name"
              required
            >
          </div>
  
          <div class="form-group">
            <label for="eventDate">Event Date*</label>
            <input 
              id="eventDate"
              type="date" 
              v-model="newEvent.date" 
              required
            >
          </div>
  
          <div class="form-group">
            <label for="eventLocation">Location*</label>
            <input 
              id="eventLocation"
              type="text" 
              v-model="newEvent.location" 
              placeholder="Enter event location"
              required
            >
          </div>
  
          <div class="form-group">
            <label for="eventDescription">Description*</label>
            <textarea 
              id="eventDescription"
              v-model="newEvent.description" 
              placeholder="Describe your event"
              rows="4"
              required
            ></textarea>
          </div>
  
          <div class="form-group checkbox">
            <input 
              id="eventFeatured"
              type="checkbox" 
              v-model="newEvent.featured"
            >
            <label for="eventFeatured">Mark as featured event</label>
          </div>
  
          <div class="form-actions">
            <button type="button" @click="goBack" class="btn-secondary">Cancel</button>
            <button type="submit" class="btn-primary">Create Event</button>
          </div>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddEventView',
    data() {
      return {
        newEvent: {
          name: '',
          date: '',
          location: '',
          description: '',
          featured: false,
          isFavorite: false
        }
      }
    },
    methods: {
      submitForm() {
        // Create a new event object
        const event = {
          ...this.newEvent,
          id: Date.now(), // Generate a unique ID based on timestamp
          date: new Date(this.newEvent.date) // Convert string date to Date object
        }
        
        // Add to events store (using different methods depending on your state management)
        // Option 1: If using Vuex
        // this.$store.dispatch('addEvent', event)
        
        // Option 2: If using provide/inject or a global event bus
        // this.$root.$emit('add-event', event)
        
        // Option 3: If you're storing events in local storage
        const events = JSON.parse(localStorage.getItem('events') || '[]')
        events.push(event)
        localStorage.setItem('events', JSON.stringify(events))
        
        // Show success message (could use a toast notification)
        alert('Event created successfully!')
        
        // Navigate back to events list
        this.$router.push('/events')
      },
      goBack() {
        this.$router.push('/events')
      }
    }
  }
  </script>
  
  <style scoped>
  .add-event {
    min-height: 100vh;
    background-color: #f5f7fa;
  }
  
  .add-event-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .event-form {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #4a5568;
  }
  
  input[type="text"],
  input[type="date"],
  textarea,
  select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
  
  .checkbox {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .checkbox input {
    width: auto;
  }
  
  .checkbox label {
    margin-bottom: 0;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
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
  
  .btn-secondary {
    background-color: #e2e8f0;
    color: #4a5568;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .btn-secondary:hover {
    background-color: #cbd5e0;
  }
  
  @media (max-width: 768px) {
    .form-actions {
      flex-direction: column;
    }
    
    .btn-primary,
    .btn-secondary {
      width: 100%;
    }
  }
  </style>
  