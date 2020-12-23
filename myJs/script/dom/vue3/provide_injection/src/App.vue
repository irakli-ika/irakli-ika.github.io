<template>
  <section>
    <div>
      <input type="text" v-model="innerText">
      <button @click="click">Click</button>
    </div>
  </section>
  <child-component></child-component>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      txtMessage: this.message
    }
  },
  data() {
    return {
      innerText: '',
      message: { txt: '' }
    }
  },
  methods: {
    click() {
      this.message.txt = this.innerText
      this.innerText = ''
    }
  }
}
</script>