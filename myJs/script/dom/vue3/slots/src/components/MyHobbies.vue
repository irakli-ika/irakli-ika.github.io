<template>
    <section>
        <div v-for="hobby in hobbies" :key="hobby">
            <h5>{{ hobby }}</h5>
        </div>
        <hobby-list></hobby-list>
    </section>
</template>

<script>
import HobbyList from './HobbyList.vue'
export default {
    components: {
        HobbyList
    },
    inject: [
        'hobbies'
    ]
    
}
</script>