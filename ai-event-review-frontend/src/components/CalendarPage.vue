<template>
  <div class="calendar-container">
    <h2>Event Calendar</h2>
    <vue-cal
      class="custom-calendar"
      :disable-views="['years']"
      :events="events"
      :time="false"
      default-view="month"
      hide-weekends
      today-button
      small
    />
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: "CalendarPage",
  components: { VueCal },
  data() {
    return {
      events: [
        {
          start: new Date(2025, 2, 15), // March 15, 2025
          end: new Date(2025, 2, 15),
          title: "Tech Conference 2025",
          content: "Annual technology conference",
          class: 'tech-event'
        },
        {
          start: new Date(2025, 5, 20), // June 20, 2025
          end: new Date(2025, 5, 20),
          title: "Music Festival 2025",
          content: "Summer music festival",
          class: 'music-event'
        },
      ]
    };
  }
};
</script>

<style>
.calendar-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

.custom-calendar {
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Custom event classes */
.tech-event {
  background-color: #42b983 !important;
  color: white;
}

.music-event {
  background-color: #ff7675 !important;
  color: white;
}

/* Make sure the calendar header is visible */
.vuecal__title-bar {
  background-color: #f8f9fa;
  padding: 10px;
}

/* Style the event cells */
.vuecal__event {
  padding: 4px;
  border-radius: 4px;
}
</style>