<template>
    <ul>
        <learning-resources
        v-for="res in resources"
        :key="res.title"
        :id="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link">
        </learning-resources>
  </ul>
</template>

<script>
    import LearningResources from './LearningResources.vue'

    export default {
        inject: ['resources'],
        components: {
            LearningResources
        }        
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        margin: auto;
        padding: 0;
        max-width: 40rem;
    }
</style>
