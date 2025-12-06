
<template>
  <div class="contact-container">
    <h2>Get in Touch</h2>

    <div class="contact-content">
      <div class="contact-info">
        <h3>Our Information</h3>
        <p>We'd love to hear from you. Please use the form to send us a message, or use the contact details below.</p>

        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <strong>Address:</strong>
            <p>Odza yaounde</p>
          </div>
        </div>

        <div class="info-item">
          <i class="fas fa-phone-alt"></i>
          <div>
            <strong>Phone:</strong>
            <p>+237 6948187663</p>
          </div>
        </div>

        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <div>
            <strong>Email:</strong>
            <p>fonkouaarnauld@gmail.com</p>
          </div>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="submitForm">
        <h3>Send Us a Message</h3>

        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" v-model="formData.name" required placeholder="John Doe">
        </div>

        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" v-model="formData.email" required placeholder="name@example.com">
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" v-model="formData.subject" required placeholder="Inquiry about...">
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" rows="5" required placeholder="How can we help you?"></textarea>
        </div>

        <button type="submit" :disabled="isSubmitting" class="submit-btn">
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>

        <p v-if="successMessage" class="message-success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="message-error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';


const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

// --- METHODS ---
const submitForm = async () => {
  // Clear previous messages
  successMessage.value = '';
  errorMessage.value = '';
  isSubmitting.value = true;

  try {
    const response = await axios.post('http://localhost:3000/contact', formData.value);

    if (response.status === 200 || response.status === 201) {
      successMessage.value = 'Thank you for your message! We will get back to you soon.';
      // Reset form fields
      formData.value = { name: '', email: '', subject: '', message: '' };
    } else {
      errorMessage.value = 'Failed to send message. Please try again.';
    }

  } catch (error) {
    console.error('Contact Form Submission Error:', error);
    // Use the error message from the backend if available, otherwise a generic one
    errorMessage.value = error.response?.data?.message || 'A network error occurred. Please check your connection.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>


.contact-container {
    max-width: 1000px;
    margin: 40px auto;
    padding: 30px;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
    text-align: center;
    color: #007bff;
    margin-bottom: 40px;
    font-size: 2.5em;
    font-weight: 700;
}

.contact-content {
    display: flex;
    gap: 40px;
}

h3 {
    color: #343a40;
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.5em;
    border-bottom: 2px solid #e9ecef;
    padding-bottom: 5px;
}

.contact-info {
    flex: 1;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.contact-info > p {
    color: #6c757d;
    margin-bottom: 30px;
    line-height: 1.6;
}

.info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;
}

.info-item i {
    font-size: 1.5em;
    color: #007bff;
    margin-right: 15px;
    padding-top: 5px;
}

.info-item strong {
    display: block;
    margin-bottom: 2px;
    color: #343a40;
}

.info-item p {
    margin: 0;
    color: #495057;
}

.contact-form {
    flex: 2;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #495057;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 1em;
    transition: border-color 0.3s, box-shadow 0.3s;
    box-sizing: border-box;
}

input:focus,
textarea:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: none;
}

textarea {
    resize: vertical;
}

.submit-btn {
    display: block;
    width: 100%;
    padding: 14px;
    margin-top: 20px;
    background-color: #28a745; /* Green for action */
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.1em;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s, opacity 0.3s;
}

.submit-btn:hover:not(:disabled) {
    background-color: #1e7e34;
}

.submit-btn:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    opacity: 0.7;
}


.message-success {
    margin-top: 15px;
    padding: 10px;
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    text-align: center;
}

.message-error {
    margin-top: 15px;
    padding: 10px;
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    text-align: center;
}


@media (max-width: 768px) {
    .contact-content {
        flex-direction: column;
    }

    .contact-info, .contact-form {
        flex: none;
        width: 100%;
    }
}
</style>
```
