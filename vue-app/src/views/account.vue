
<script setup>
import { RouterLink} from 'vue-router';

</script>
<template>

    <h1 class="account">ACCOUNT</h1>
    <h3>Account Center. Have an account already ? Login. Don't have an account Signup to create a new account.</h3>
    <ul>
    <li><RouterLink to="/signin">Login</RouterLink></li>
    <li><RouterLink to="/signup"> Sign-up a new account</RouterLink></li>
    </ul>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

.account{
  margin-top: 100px;
    color: bisque;
    margin-bottom: 35px;
    font-weight: 600;
    font-family: 'Courier New', Courier, monospace;
    text-align:center;
    font-size: 40px;
}
h3{
    text-wrap: 30px;
    margin-bottom: 45px;
    text-align: center;

}
ul{
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 35px;
}
li{
  list-style: none;
    color: green;
  text-align: center;
}
li:hover{
    color: lightgreen;
}

</style>
