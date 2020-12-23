<template>
  <section>
    <div>
      <slot-card>
        <template v-slot:header>
          <h1>Header</h1>
        </template>
        <!-- end header content -->
        <template v-slot:content>
          <h1>Content</h1>
          <my-hobbies></my-hobbies>
        </template>
        <!-- end content slot -->
        <template v-slot:footer>
          <h1>Footer</h1>
        </template>
      </slot-card>
    </div>
  </section>
</template>

<script>
import SlotCard from './components/SlotCard.vue'
import MyHobbies from './components/MyHobbies.vue'

export default {
  components: {
    SlotCard,
    MyHobbies
  },
  provide() {
    return {
      hobbies: this.hobbies
    }
  },
  data() {
    return {
      hobbies: [
        'Watch Moves',
        'Play The Guitar',
        'Play PC Games'
      ]
    }
  }
}

</script>