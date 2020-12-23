<template>
    <form @submit.prevent>
        <input type='text' placeholder="name" v-model="enteredName">
        <input type="tel" placeholder="phone" v-model="enteredPhone">
        <input type="email" placeholder="email" v-model="enteredEmail">
        <button @click="sendInner">Add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        sendInner() {
            this.$emit('add-friend', this.enteredName, this.enteredPhone, this.enteredEmail)
        }
    }
}
</script>