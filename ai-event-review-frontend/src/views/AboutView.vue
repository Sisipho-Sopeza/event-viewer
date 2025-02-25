<template>
  <div class="about">
    <section class="about-content">
      <h1>About Event Viewer</h1>
      
      <div class="about-card">
        <h2>Our Mission</h2>
        <p>
          Event Viewer is dedicated to connecting people with incredible events happening in their community. 
          We believe that shared experiences create stronger connections and more vibrant communities.
        </p>
      </div>
      
      <div class="about-section">
        <div class="about-column">
          <h2>What We Offer</h2>
          <ul>
            <li>
              <strong>Discover Events</strong>
              <p>Find the perfect events to match your interests and schedule.</p>
            </li>
            <li>
              <strong>Create & Share</strong>
              <p>Easily create and promote your own events to our growing community.</p>
            </li>
            <li>
              <strong>Connect</strong>
              <p>Meet like-minded people and build meaningful connections.</p>
            </li>
            <li>
              <strong>Review & Recommend</strong>
              <p>Share your experiences and help others find great events.</p>
            </li>
          </ul>
        </div>
        
        <div class="about-column">
          <h2>Our Team</h2>
          <div class="team-members">
            <div class="team-member">
              <div class="team-member-avatar">JS</div>
              <h3>Jane Smith</h3>
              <p>Founder & CEO</p>
            </div>
            <div class="team-member">
              <div class="team-member-avatar">MM</div>
              <h3>Mark Miller</h3>
              <p>Lead Developer</p>
            </div>
            <div class="team-member">
              <div class="team-member-avatar">AT</div>
              <h3>Alex Thompson</h3>
              <p>Community Manager</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="about-card contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or suggestions? We'd love to hear from you!</p>
        <button @click="showContactForm = !showContactForm" class="contact-button">
          {{ showContactForm ? 'Hide Contact Form' : 'Show Contact Form' }}
        </button>
        
        <div v-if="showContactForm" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="contactForm.name" placeholder="Your Name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="contactForm.email" placeholder="Your Email">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="contactForm.message" placeholder="Your Message" rows="4"></textarea>
          </div>
          <button @click="submitContactForm" class="submit-button">Send Message</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      showContactForm: false,
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitContactForm() {
      // In a real application, this would send the form data to your backend
      alert(`Thanks for your message, ${this.contactForm.name}! We'll get back to you soon.`);
      this.contactForm = { name: '', email: '', message: '' };
      this.showContactForm = false;
    }
  }
};
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.about-content {
  margin-top: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  color: #3498db;
  margin-bottom: 1rem;
}

.about-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.about-section {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.about-column {
  flex: 1;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1.5rem;
}

li strong {
  display: block;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.team-member {
  text-align: center;
}

.team-member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #3498db;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

.team-member h3 {
  margin: 0;
  font-size: 1.2rem;
}

.team-member p {
  margin: 0.5rem 0 0;
  color: #777;
}

.contact-section {
  text-align: center;
}

.contact-button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
}

.contact-button:hover {
  background-color: #2980b9;
}

.contact-form {
  margin-top: 2rem;
  text-align: left;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-button {
  background-color: #27ae60;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.submit-button:hover {
  background-color: #219653;
}

/* Responsive design */
@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
  }
  
  .team-members {
    justify-content: flex-start;
  }
}
</style>