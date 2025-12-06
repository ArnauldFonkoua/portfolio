<script setup>
import {ref} from 'vue'
// FIX 1: Import axios as the default export
import axios from 'axios'


const user = ref({email: "", password: ""})

const loginError = ref(null)

// Renaming the login handler to be the submit handler
const submit = async () => {
    // FIX 2: Check reactive data access
    const { email, password } = user.value;

    loginError.value = null;

    try {
        // Corrected data access for the payload
        const response = await axios.post('http://localhost:3000/login', {
            email: email,
            password: password
        });

        console.log('Login successful:', response.data);
        alert('Login successful!'); // User feedback

    } catch (error) {
        console.error('Login failed:', error);
        loginError.value = error.response?.data?.message || 'Failed to connect to the server.';
        alert(`Login failed: ${loginError.value}`); // User feedback
    }
}
</script>

<template>
    <form id="form" @submit.prevent="submit">
        <h2>Member Login</h2>
        <div class="input-group">
            <label for="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                v-model="user.email"
                placeholder="you@example.com"
                required
            />
        </div>
        <div class="input-group">
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                v-model="user.password"
                placeholder="••••••••"
                required
            />
        </div>
        <input value="Login" type="submit" class="submit-button"/>
    </form>
</template>

<style scoped>
/* -------------------- */
/* BASE STYLES & LAYOUT */
/* -------------------- */

#form {
    /* Centering the form on the page, assuming the parent container allows it */
    width: 100%;
    max-width: 380px;
    margin: 50px auto;
    padding: 30px;

    /* Visual styling */
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    /* Flex layout for vertical stacking */
    display: flex;
    flex-direction: column;
    gap: 15px; /* Space between elements */

    font-family: Arial, sans-serif;
}

h2 {
    text-align: center;
    color: #333333;
    margin-bottom: 20px;
    font-size: 1.8em;
}

/* -------------------- */
/* INPUT GROUPS */
/* -------------------- */

.input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

label {
    font-weight: 600;
    color: #555555;
    font-size: 0.95em;
    margin-left: 2px;
}

input[type="email"],
input[type="password"] {
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    font-size: 1em;
    transition: border-color 0.3s, box-shadow 0.3s;
}

input[type="email"]:focus,
input[type="password"]:focus {
    border-color: #007bff; /* Primary color */
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    outline: none;
}

/* -------------------- */
/* BUTTON STYLE */
/* -------------------- */

.submit-button {
    margin-top: 20px;
    padding: 12px 20px;
    background-color: #007bff; /* Primary color */
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1em;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s;
}

.submit-button:hover {
    background-color: #0056b3; /* Darker shade on hover */
}

.submit-button:active {
    transform: translateY(1px); /* Little press effect */
}
</style>
