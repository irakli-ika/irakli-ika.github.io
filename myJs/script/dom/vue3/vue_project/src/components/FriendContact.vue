<template>
   <section>
       <h2>{{name}} {{isFavorite === true ? '(favorite)' : ''}}</h2>
       <ul v-if="listVisibility">
           <li>{{phone}}</li>
           <li>{{email}}</li>
       </ul>
       <button @click="toggleFavorite">favorite</button>
       <button @click="visible">show/hide</button>
       <button @click="deleteFriend">Delete</button>
   </section>
</template>


<script>
export default {
    props:['id','name', 'phone', 'email', 'isFavorite'],
    // emits: {
    //     'toggle-favorite': function(id) {
    //         if(id) {
    //             return true
    //         }
    //         else {
    //             console.warn('id is missing');
    //             return false
    //         }
    //     }
    // },
    data() {
        return {
            listVisibility: false
       } 
    },
    methods: {
        visible() {
            this.listVisibility = !this.listVisibility
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id)
        },
        deleteFriend() {
            this.$emit('delete-friend', this.id)
        }
    }
}
</script> 
