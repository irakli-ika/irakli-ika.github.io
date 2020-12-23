<template>
  <the-header></the-header>
  <the-main></the-main>
</template>

<script>

import TheHeader from './components/layouts/TheHeader.vue'
import TheMain from './components/resources/TheMain.vue'


export default {
  components: {
    TheHeader,
    TheMain
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
body {
  font-family: 'Poppins', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
    list-style-type: none;
    padding: .5rem 1rem;
}
.container {
  max-width: 40rem;
  margin: auto;
}
@media (max-width: 680px) {
  .container {
    max-width: 30rem;
    margin: auto;
  }
}
</style>