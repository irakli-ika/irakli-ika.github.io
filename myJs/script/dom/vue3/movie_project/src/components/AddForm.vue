<template>
    <div class="addModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header ">
                    <h5 class="modal-title m-auto">ფილმის დამატება</h5>
                </div>
                <div class="modal-body">
                    <div class="d-flex flex-column align-items-center">
                        <label>სახელი:</label>
                        <input type="text" v-model="name">
                        <label>რეჟისორი:</label>
                        <input type="text" v-model="director">
                        <label>ჟანრი:</label>
                        <input type="text" v-model="genre">
                        <label>ქვეყანა:</label>
                        <input type="text" v-model="country">
                        <label>აღწერა:</label>
                        <textarea cols="60" rows="8" v-model="description"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeBtn">დახურვა</button>
                    <button type="button" class="btn btn-primary" @click="saveBtn">შენახვა</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Buttons from './Buttons.vue'

export default {
// components: { Buttons },
    data() {
        return {
            name: '',
            director: '',
            genre: '',
            country: '',
            description: ''
        }
    },
    methods: {
        closeBtn() {
            this.$emit('close-modal')
            this.name = '',
            this.director = '',
            this.genre = '',
            this.country = '',
            this.description = '' 
        },
        saveBtn() {
            this.$emit('save-changes', this.name, this.director, this.genre, this.country, this.description)
            this.name = '',
            this.director = '',
            this.genre = '',
            this.country = '',
            this.description = '' 
        }
    }
}
</script>