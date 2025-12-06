<template>
  <form @submit.prevent="handleLogin">
    <h3>Registration Form</h3>

    <div class="input">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="user.email" placeholder="user@example.com" required>
    </div>
    <div class="input">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="user.password" placeholder="Password" required>
    </div>

    <div class="input">
      <label for="fname">First Name</label>
      <input type="text" name="fname" id="fname" v-model="user.fname" placeholder="First Name" required>
    </div>
    <div class="input">
      <label for="lname">Last Name</label>
      <input type="text" name="lname" id="lname" v-model="user.lname" placeholder="Last Name" required>
    </div>

    <div class="group">
      <div class="group">
        <label for="age">Age</label>
        <input type="number" name="age" v-model="user.age" required>
      </div>
      <div class="group">
        <label for="dob">Date of Birth</label>
        <input type="date" name="dob" id="dob" placeholder="date-of-birth" v-model="user.dob" required>
      </div>
    </div>

    <div class="radio">
      <label for="gender">Gender</label>
      <div class="gender">
        <label for="male">Male</label>
        <input type="radio" name="gender" id="male" v-model="user.gender" value="male" checked required>
      </div>
      <div class="gender">
        <label for="female">Female</label>
        <input type="radio" name="gender" id="female" v-model="user.gender" value="female" required>
      </div>
    </div>

    <input type="submit" name="submit" class="submit" value="Register">
  </form>
</template>

<script setup>
defineProps({
  msg1: {
    type: String,
    required: true,
  }
})

import { ref } from "vue"
import axios from 'axios'

// Added password to the reactive object
const user = ref({fname: "", lname: "", email: "", password: "", gender: "" , age: "", dob: ""})

// The submit function is now redundant, removing it.
// const submit = () => { console.log(user.value); }

const loginError = ref(null)

const handleLogin = async () => {
  loginError.value = null;

  // Destructure from user.value to get the reactive data
  const { email, password, fname, lname, gender, age, dob } = user.value;

  try {
     const response = await axios.post('http://localhost:3000/register', {
      email,
      password,
      fname,
      lname,
      gender,
      age,
      dob
    });

    console.log('Registration successful:', response.data);
    alert('Registration successful!'); // Provide user feedback

  } catch (error) {
    console.error('Registration failed:', error);
    loginError.value = error.response?.data?.message || 'Failed to connect to the server or unknown error.';
    alert(`Registration Failed: ${loginError.value}`);
  }
}
</script>

<style scoped>
 form{
    position: relative;
    width: 80%;
    height: 80%;
    padding: 30px 30px;
    justify-content: center;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
    background: aliceblue;
    border-radius: 15px;
    margin: 50px auto;
  }
  h1{
    color: rgb(5, 18, 94);
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin-bottom:10px;
  }
  h3{
    color: rgb(5, 94, 5);
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  label{
    color: black;
    font-weight: 600;
  }
  .input{
    position: relative;
    display: grid;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .group{
    position: relative;
    display: flex;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    justify-content: start;
    align-items: center;
    gap: 16px;
  }

  .input input[type="text"],.input input[type="email"] , .group input[type="number"], .group input[type="date"]{
    padding: 10px;
    border: 1px solid black;
    border-radius: 6px;
  }
  .input  input[type="text"]:focus, .input input[type="email"]:focus{
    outline: none;
    background: aliceblue;
    border: 1px solid rgb(205, 217, 255);
    box-shadow: 0.2px 0.2px 1px 3px rgb(205, 217, 255);
  }
  .submit{
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 15px;
    color: white;
    background-color: black;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
  .submit:hover{
    background-color: rgba(0, 0, 0, 0.623);
  }
  .radio{
    position: relative;
    display: flex;
    font-size: 18px;
    font-weight: 600;
    gap: 15px;
  }
.radio .gender{
    position: relative;
    display: flex;
    font-size: 18px;
    font-weight: 600;
    gap: 10px;
}

@media (max-width: 767px) {
  form{
    margin-top: 50px;
  }
  .group{
    position: relative;
    display: grid;
    gap: 10px;
  }
}
</style>
